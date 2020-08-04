const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const beersRouter = require('./routes/beers');
const tastingsRouter = require('./routes/tastings');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);
app.use('/api/beers', beersRouter);
app.use('/api/tastings', tastingsRouter);

module.exports = app;
