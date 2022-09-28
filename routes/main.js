const mainRouter = require('express').Router();
const Main = require('../views/Main');

module.exports = mainRouter.get('/', (req, res) => {
  res.renderComponent(Main);
});