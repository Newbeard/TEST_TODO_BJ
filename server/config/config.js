const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const isSession = require('../middleware/isSession');
const cookiesCleaner = require('../middleware/cookiesCleaner');

const config = (app) => {
  // USE
  app.use(cors({
    origin: ['http://localhost:3000', 'https://todo-test-bj.herokuapp.com/'],
    credentials: true,
  }));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(isSession);
  app.use(cookiesCleaner);
};

module.exports = config;
