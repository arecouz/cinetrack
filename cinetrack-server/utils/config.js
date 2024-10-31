require('dotenv').config();


if (!process.env.TEST_MONGODB_URI || !process.env.MONGODB_URI) {
  throw Error('Either TEST_MONGODB_URI or MONGODB_URI env variable not set up');
}

const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? (console.log('using test db...'), process.env.TEST_MONGODB_URI)
    : (console.log('not using test db...'), process.env.MONGODB_URI);

module.exports = {
  MONGODB_URI,
  PORT,
};
