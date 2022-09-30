const express = require('express');

const router = express.Router();
const csvController = require('../controller/csv.ordercontroller');

// let routes = (app) => {
router.get('/', csvController.download);
// };

module.exports = router;
