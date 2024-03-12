const indexRouter = require('express').Router();
const express = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const Page404 = require('../views/Page404');

const { User } = require('../../db/models');


indexRouter.get('/', async (req, res) => {
  const { login } = req.session;
  renderTemplate(Home, { login }, res);
});

indexRouter.get('/404', (req, res) => {
  renderTemplate(Page404, { }, res);
});

module.exports = indexRouter;
