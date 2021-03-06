const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// this is unnecessary, just a middleware logger so we can keep track of our requests
app.use(logger('dev'));

// if app is in production, then serve up client/build as static in express
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// turn on routes
const routes = require('./routes');
app.use(routes);

// set up mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/notetaker', {
  useNewUrlParser: true
});

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
