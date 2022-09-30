const CsvParser = require('json2csv').Parser;
const { User } = require('../db/models');

const download = (req, res) => {
  User.findAll().then((objs) => {
    const users = [];

    objs.forEach((obj) => {
      const {
        id, email, phone, createdAt, updatedAt,
      } = obj;
      users.push({
        id, email, phone, createdAt, updatedAt,
      });
    });

    const csvFields = ['id', 'email', 'phone', 'createdAt', 'updatedAt'];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(users);
    console.log(csvData);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=users.csv');

    res.status(200).end(csvData);
  });
};

module.exports = {
  download,
};
