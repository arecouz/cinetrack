const { authenticationToken } = require('../utils/middleware');
const myMoviesRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const MyMovie = require('../models/myMovie');
const User = require('../models/user');

myMoviesRouter.get('/', async (request, response) => {
  const myMovies = await MyMovie.find({}).populate('user', { username: 1 });
  response.status(200).json(myMovies);
});

myMoviesRouter.get('/:id', async (request, response) => {
  const MyMovie = await MyMovie.findById(request.params.id);
  response.status(200).json(MyMovie);
});

myMoviesRouter.post('/', async (request, response) => {
  console.log('myMovies POST', request.token)
  const { title, date, poster, rating } = request.body;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' });
  }
  const user = await User.findById(decodedToken.id);

  const newMyMovie = new MyMovie({ title, date, poster, rating, user });
  const savedMyMovie = await newMyMovie.save();
  user.movies = user.movies.concat(savedMyMovie._id);
  await user.save();
  response.status(201).json(savedMyMovie);
});

myMoviesRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' });
  }

  const movieToDelete = await MyMovie.findById(request.params.id);

  if (!movieToDelete) {
    return response.status(404).json({ error: 'Movie not found' });
  }

  if (movieToDelete.user.toString() !== decodedToken.id) {
    return response.status(403).json({ error: 'Permission denied' });
  }

  await MyMovie.findByIdAndDelete(request.params.id);

  await User.findByIdAndUpdate(decodedToken.id, {
    $pull: { movies: request.params.id },
  });

  response.status(204).end();
});

myMoviesRouter.put('/:id', async (request, response) => {
  const body = request.body;

  const updatedMyMovie = {
    title: body.title,
    date: body.date,
    poster: body.poster,
    rating: body.rating,
  };

  const updatedMovie = await MyMovies.findByIdAndUpdate(
    request.params.id,
    updatedMyMovie,
    { new: true }
  );

  if (!updatedMovie) {
    return response.status(404).json({ error: 'Movie not found' });
  }

  response.status(200).json(updatedMovie);
});

module.exports = myMoviesRouter;
