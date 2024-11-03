const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.status(200).json(users);
});

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id).populate('movies');
  response.status(200).json(user);
});

usersRouter.post('/', async (request, response) => {
  const { username, password } = request.body;
  if (password.length < 3) {
    response.status(400).json({ error: 'Password too short' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ username, passwordHash });
  const savedUser = await newUser.save();
  response.status(201).json(savedUser);
});

module.exports = usersRouter;
