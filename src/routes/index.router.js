const indexRouter = require('express').Router();
const express = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');

const { User, Product } = require('../../db/models');

indexRouter.get('/', async (req, res) => {

  const { login, userId } = req.session;
  const products = await Product.findAll({ raw: true });
  if (userId) {
    const user = await User.findOne({ where: { id: userId } });
    renderTemplate(Home, { login, products, seller: user.seller }, res);
  } else {
    renderTemplate(Home, { login, products }, res);
  }
});

indexRouter.get('/404', (req, res) => {
  renderTemplate(Page404, { }, res);
});

module.exports = indexRouter;
