require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT, SESSION_SECRET } = process.env;
const connectionCheck = require('../db/connectionCheck');

const app = express();
// routes' requires below

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  name: 'Session',
  store: new FileStore(),
  secret: SESSION_SECRET ?? '123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
// HANDLERS
// app.use('/', mainRouter);

app.listen(PORT, () => {
  connectionCheck();
  console.log(`Сервер крутится на ${PORT} порту!`);
});