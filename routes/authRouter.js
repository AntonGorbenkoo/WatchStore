const router = require('express').Router();
const bcrypt = require('bcrypt');
const Registrate = require('../views/regLog/Registrate');
const Login = require('../views/regLog/Login');

const { User } = require('../db/models');

router.get('/registration', (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  }
  res.renderComponent(Registrate, { title: 'Регистрация' });
});

router.post('/registration', async (req, res) => {
  const {
    name,
    mail,
    password,
    passwordRepeat,
  } = req.body;

  try {
    if (!mail || !name || !password || !passwordRepeat) {
      res.status(200).json({ message: 'Заполните все поля!' });
    }

    const checkPerson = await User.findOne({ where: { mail } });
    if (mail.indexOf('@') === -1 || mail.indexOf('.') === -1) {
      res.status(200).json({ message: 'Введен неккоректный e-mail' });
    } else if (password.length < 7) {
      res.status(200).json({ message: 'Пароль короткий, необходимо минимум 8 символов' });
    } else if (password !== passwordRepeat) {
      res.status(200).json({ message: 'Пароли не совпадают' });
    } else if (!checkPerson && password.length >= 8 && password === passwordRepeat) {
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name, mail, password: hashedPass,
      });
      req.session.user = newUser.id;
      res.json({ message: 'ok' });
    } else {
      res.status(409).json({ message: 'Пользователь с таким e-mail уже существует' });
    }
  } catch (error) {
    res.json({ messahe: error.message });
  }
});

router.get('/login', (req, res) => {
  res.renderComponent(Login, { title: 'Авторизация' });
});

router.post('/login', async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        mail,
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

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;

