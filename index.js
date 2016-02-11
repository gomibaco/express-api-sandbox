'use strict';

const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');
const router = require('./router');

let app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/', router);

module.exports = app;