const db = require("../db/models");
const User = db.users;

const CsvParser = require("json2csv").Parser;

const download = (req, res) => {
  User.findAll().then((objs) => {
    let users = [];

    objs.forEach((obj) => {
      const { id, email, createAt, updateAt } = obj;
      users.push({ id, email, createAt, updateAt });
    });

    const csvFields = ["id", "email", "createAt", "updateAt"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(  users );

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=users.csv");

    res.status(200).end(csvData);
  });
};

module.exports = {
  download
};