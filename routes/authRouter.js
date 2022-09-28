const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Registrate = require('../views/regLog/Registrate');
const Login = require('../views/regLog/Login');

const { User } = require('../db/models');

authRouter.get('/registration', (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  }
  res.renderComponent(Registrate, { title: 'Регистрация' });
});

authRouter.post('/registration', async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
    passwordRepeat,
    secretWord,
  } = req.body;
  console.log(req.body, '++++++++++++++++++');

  try {
    const isAdminWord = 'karen';
    let isAdmin = false;
    if (secretWord === isAdminWord) {
      isAdmin = true;
    }
    console.log(isAdmin);
    if (!email || !name || !password || !passwordRepeat || !phone) {
      res.status(200).json({ message: 'Заполните все поля!' });
    }

    const checkPerson = await User.findOne({ where: { email } });
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      res.status(200).json({ message: 'Введен неккоректный e-mail' });
    } else if (password.length < 7) {
      res.status(200).json({ message: 'Пароль короткий, необходимо минимум 8 символов' });
    } else if (password !== passwordRepeat) {
      res.status(200).json({ message: 'Пароли не совпадают' });
    } else if (!checkPerson && password.length >= 8 && password === passwordRepeat) {
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name, email, phone, password: hashedPass, isAdmin,
      });
      req.session.user_id = newUser.id;
      res.json({ message: 'ok' });
    } else {
      res.status(409).json({ message: 'Пользователь с таким e-mail уже существует' });
    }
  } catch (error) {
    res.json({ messahe: error.message });
  }
});

authRouter.get('/login', (req, res) => {
  res.renderComponent(Login, { title: 'Авторизация' });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const rightPass = await bcrypt.compare(password, user.password);
    if (!rightPass || !user) {
      res.json({ status: 'error', message: 'Неправильный пароль или e-mail' });
      return;
    }
    req.session.user = user.id;
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouter;
