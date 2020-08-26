const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const apiV1 = require('./api/v1');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1', apiV1);

module.exports = app;
