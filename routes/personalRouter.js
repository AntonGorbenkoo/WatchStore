const personalRouter = require('express').Router();
const PersonalCabinet = require('../views/PersonalAccount');
const {Order} = require('../db/models');

personalRouter.get('/', (req, res) => {
  Order.findAll({
    raw: true,
  })
  .then((arrOrders) => {
    res.renderComponent(PersonalCabinet, {arrOrders});
  })
  .catch((err) => res.status(500).send(`Error:${err}`));
})

module.exports = personalRouter;
