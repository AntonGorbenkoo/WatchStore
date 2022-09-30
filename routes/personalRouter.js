const personalRouter = require('express').Router();
const multer = require('multer');
const path = require('path');
const PersonalCabinet = require('../views/PersonalAccount');
const UserCard = require('../views/UserCard');
const { Order } = require('../db/models');
const PersonalAccount = require('../views/PersonalAccount');

const imagePath = path.join(process.env.PWD, 'public/images');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

personalRouter.get('/', (req, res) => {
  Order.findAll({
    raw: true,
  })
    .then((arrOrders) => {
      res.renderComponent(PersonalCabinet, { arrOrders });
    })
    .catch((err) => res.status(500).send(`Error:${err}`));
});

personalRouter.post('/', upload.array('image'), async (req, res) => {
  const { title, descr } = req.body;
  // const { title } = req.body;
  try {
    console.log(title, '111111111111111111111111111111111');
    const image = req.files.map((el) => (el = el.originalname));
    console.log(image, '^^^^^^^^');
    const imgStr = image.join(', ');
    const oneCard = await Order.create({
      title, description: descr, img: imgStr, user_id: res.locals.user.id,
    });
    // console.log(newItem.img);
    // res.send('ok');
    res.renderComponent(PersonalAccount, { oneCard }, { doctype: false });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = personalRouter;
