const mainRouter = require('express').Router();
const Main = require('../views/Main');
const { Watch } = require('../db/models');

module.exports = mainRouter.get('/', (req, res) => {
  Watch.findAll({
    raw: true,
  })
    .then((arrItem) => {
      res.renderComponent(Main, { arrItem });
    })
    .catch((err) => res.status(500).send(`Error:${err}`));
  // }
});
