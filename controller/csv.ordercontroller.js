const CsvParser = require('json2csv').Parser;
const { Order } = require('../db/models');

const download = (req, res) => {
  Order.findAll().then((objs) => {
    const orders = [];

    objs.forEach((obj) => {
      const {
        id, title, description, img, user_id, createdAt, updatedAt,
      } = obj;
      orders.push({
        id, title, description, img, user_id, createdAt, updatedAt,
      });
    });

    const csvFields = ['id, title, description, img, user_id, createdAt, updatedAt'];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(orders);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=orders.csv');

    res.status(200).end(csvData);
  });
};

module.exports = {
  download,
};
