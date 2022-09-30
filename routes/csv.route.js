const express = require('express');

const router = express.Router();
const csvController = require('../controller/csv.controller');

const routes = (app) => {
  router.get('/', csvController.download);
};

module.exports = routes;
