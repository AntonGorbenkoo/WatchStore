const adminRouter = require('express').Router();
const AdminCabinet = require('../views/AdminCabinet');
const { Watch } = require('../db/models');

adminRouter.get('/', (req, res) => {
  // if (!res.locals.user.is_Admin) {
  //   res.redirect('/');
  // } else {
  Watch.findAll({
    raw: true,
  })
    .then((arrItem) => {
      res.renderComponent(AdminCabinet, { arrItem });
    })
    .catch((err) => res.status(500).send(`Error:${err}`));
  // }
});
module.exports = adminRouter;
