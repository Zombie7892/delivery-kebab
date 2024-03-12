const indexRouter = require('express').Router();
const express = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');
const Cabinet = require('../views/user/Cabinet');

const calcCrow = require('../utils/distance');

const { User, Product, Order } = require('../../db/models');
const { secureRoute, checkUser } = require('../middlewares/common');

indexRouter.get('/', async (req, res) => {
  const { login, userId } = req.session;
  const products = await Product.findAll({ raw: true });
  if (userId) {
    const user = await User.findOne({ where: { id: userId }, raw: true });
    const finalProducts = products.map((product) => product.distance = calcCrow(product.latitude, product.longitude, user.latitude, user.longitude));
    const sortedByDistanceProducts = products.sort((a, b) => b.distance -a.distance);
    renderTemplate(Home, { login, products: sortedByDistanceProducts, seller: user.seller }, res);
  } else {
    renderTemplate(Home, { userId, login, products }, res);
  }
});

indexRouter.get('/cabinet/', checkUser, async (req, res) => {
  const { login, userId } = req.session;
  const user = await User.findOne({ where: { id: userId } });
  if (!user || user.id !== userId) {
    res.redirect('/');
  } else {
    const products = await Product.findAll({ where: { userId } });
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          where: { userId },
        },
      ],
    });
    renderTemplate(Cabinet, {
      login, userId, products, orders,
    }, res);
  }
});

indexRouter.get('/404', (req, res) => {
  renderTemplate(Page404, { }, res);
});

module.exports = indexRouter;
