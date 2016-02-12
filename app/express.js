'use strict';

// Require node modules
const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');
const router = require('./router');

// Create express app
let app = express();

// Use middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Routing
app.use('/', router);

// Not found
app.use(function(req, res, next) {
  var err = Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;