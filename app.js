require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const mainRouter = require('./routes/mainRouter');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');

const initRouter = require('./routes/csv.route');

const personalRouter = require('./routes/personalRouter');

const PORT = process.env.PORT ?? 3000;
const app = express();
config(app);

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

app.use('/download', initRouter);

app.use('/lk', personalRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
