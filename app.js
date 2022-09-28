require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const mainRouter = require('./routes/main');

const PORT = process.env.PORT ?? 3000;
const app = express();
config(app);

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
