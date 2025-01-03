const path = require('path');

const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');

const myMoviesRouter = require('./controllers/myMovies');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
// const testingRouter = require('./controllers/testing');

const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
logger.info('connecting to mongoDB blogsList...');

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB @:', config.MONGODB_URI);
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.authenticationToken);

app.use('/api/myMovies', middleware.userExtractor, myMoviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

if (process.env.NODE_ENV === 'test') {
  console.log('port: ', process.env.PORT);
  app.use('/api/testing', testingRouter);
} else {
  console.log('using dist');
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
