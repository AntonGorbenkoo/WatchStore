const adminRouter = require('express').Router();
const multer = require('multer');
const path = require('path');
const AdminCabinet = require('../views/AdminCabinet');
const AdminCard = require('../views/AdminCard');
const { Watch } = require('../db/models');

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

adminRouter.post('/', upload.array('image'), async (req, res) => {
  const { title, descr, price } = req.body;
  // const { title } = req.body;
  console.log(price);
  try {
    console.log(title, '111111111111111111111111111111111');
    const image = req.files.map((el) => (el = el.originalname));
    console.log(image, '^^^^^^^^');
    const imgStr = image.join(', ');
    console.log(imgStr, '99999999999999999999');
    const oneCard = await Watch.create({
      title, description: descr, img: imgStr, price, user_id: res.locals.user.id,
    });
    // console.log(newItem.img);
    // res.send('ok');
    res.renderComponent(AdminCard, { oneCard }, { doctype: false });
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = adminRouter;
