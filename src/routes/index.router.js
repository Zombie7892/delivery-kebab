const indexRouter = require('express').Router();
const express = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');

const { User, Product } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  const { login } = req.session;
  const products = await Product.findAll({ raw: true });
  renderTemplate(Home, { login, products }, res);
});

indexRouter.get('/404', (req, res) => {
  renderTemplate(Page404, { }, res);
});

module.exports = indexRouter;
