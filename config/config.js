const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
const path = require('path');
const sessionConfig = require('./sessionConfig');
const ssr = require('../middlewares/ssr');
const getUser = require('../middlewares/getUser');
const authRouter = require('../routes/authRouter')

const config = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }, { limit: '100mb' }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(getUser);
  app.use(ssr);
  app.use('/auth', authRouter);
};

module.exports = config;
