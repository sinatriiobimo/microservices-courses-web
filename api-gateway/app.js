require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const mediaRouter = require('./routes/media');
const coursesRouter = require('./routes/courses');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/media', mediaRouter);
app.use('/courses', coursesRouter);

module.exports = app;
