const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const { Op } = require('sequelize');

const userRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Register = require('../views/user/Register');
const Page404 = require('../views/Page404');
const Login = require('../views/user/Login');

const { checkUser } = require('../middlewares/common');

const { User } = require('../../db/models');
const EditAddress = require('../views/EditAddress');

userRouter.get('/register', async (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(Register, { login }, res);
  } catch (error) {
    renderTemplate(Page404, { error }, res);
  }
});

userRouter.post(
  '/register',
  [
    body('password')
      .trim()
      .isLength({ min: 4 })
      .withMessage('Пароль должен быть от 4 символов'),
    body('email')
      .trim()
      .isEmail()
      .withMessage('Введите корректный email адрес'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() });
      }
      const {
        email, password, login, number, seller, latitude, longitude,
      } = req.body;
      const user = await User.findOne({
        where: {
          [Op.or]: {
            login,
            email,
          },
        },
      });
      if (user) {
        res
          .status(409)
          .json({ err: 'Пользователь с такими данными  уже существует' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          email,
          password: hash,
          login,
          seller,
          number,
          latitude,
          longitude,
        });
        req.session.login = newUser.login;
        req.session.seller = newUser.seller;
        req.session.email = newUser.email;
        req.session.userId = newUser.id;
        req.session.number = newUser.number;

        req.session.save(() => {
          res.status(201).json({ success: 'Новый профиль успешно создан' });
        });
      }
    } catch (error) {
      console.log(error);
      // renderTemplate(Page404, { error }, res);
    }
  },
);

userRouter.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

userRouter.get('/login', (req, res) => {
  const { login } = req.session;
  renderTemplate(Login, { login }, res);
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res
        .status(409)
        .json({ err: `Пользователь с почтой ${email} не найден!` });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.email = user.email;
        req.session.userId = user.id;
        req.session.save(() => {
          res
            .status(200)
            .json({ logDone: `Пользователь с почтой ${email} вошёл!` });
        });
      } else {
        res.json({ wrongPass: true });
      }
    }
  } catch (error) {
    renderTemplate(Page404, { error }, res);
  }
});

userRouter.post('/editAddress/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;
    const { latitude, longitude } = req.body;
    const user = await User.findOne({ where: { id } });
    if (user.id !== userId) {
      res.redirect('/');
    } else {
      await user.update({
        latitude, longitude,
      });
      req.session.latitude = latitude;
      req.session.longitude = longitude;
      req.session.save();
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
