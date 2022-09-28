const mainRouter = require('express').Router();
const Main = require('../views/Main2');

module.exports = mainRouter.get('/', (req, res) => {
  res.renderComponent(Main);
});
