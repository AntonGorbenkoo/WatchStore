const express = require('express');

const router = express.Router();
const csvController = require('../controller/csv.usercontroller');

router.get('/', csvController.download);

module.exports = router;
