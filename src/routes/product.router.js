const { body, validationResult } = require('express-validator');

const { Op } = require('sequelize');

const productRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Page404 = require('../views/Page404');
const NewProduct = require('../views/product/NewProduct');

const { checkUser } = require('../middlewares/common');

const { User } = require('../../db/models');
const { Product } = require('../../db/models');

productRouter.get('/new', async (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(NewProduct, { login }, res);
  } catch (error) {
    console.log(error);
  }
});


module.exports = productRouter;
