'use strict';

const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

let app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.status(200).json({
    "message": "hello world"
  });
});

module.exports = app;