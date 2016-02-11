'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug');

let app = express();

app.set('x-powered-by', false);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.status(200).json({
    "message": "hello world"
  });
});

module.exports = app;