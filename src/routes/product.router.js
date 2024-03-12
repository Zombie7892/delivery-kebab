const { body, validationResult } = require('express-validator');

const { Op } = require('sequelize');

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/assets/img/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const productRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const NewProduct = require('../views/product/NewProduct');

const { checkUser } = require('../middlewares/common');

const { User, Order } = require('../../db/models');
const { Product } = require('../../db/models');

productRouter.get('/new', async (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(NewProduct, { login }, res);
  } catch (error) {
    console.log(error);
  }
});

productRouter.post('/new', upload.single('photo'), async (req, res) => {
  try {
    const { login, userId } = req.session;
    const { title, firstPrice, discount } = req.body;
    const currentPrice = (firstPrice * (100 - discount)) / 100;
    console.log(req.file);
    if (req.file) {
      const newProduct = await Product.create({
        title, firstPrice, currentPrice, userId, photo: req.file.originalname,
      });
      return res.redirect('/');
    }
    const newProduct = await Product.create({
      title, firstPrice, currentPrice, userId, photo: 'default.jpeg',
    });
    return res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

productRouter.delete('/delete/:id', checkUser, async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

productRouter.post('/order/:id', checkUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;
    const order = await Order.findOne({
      where: { userId, productId: Number(id) },
    });
    if (order) {
      res.json({ err: 'Вы уже добавили этот товар в свой заказ!' });
    } else {
      await Order.create({ userId, productId: Number(id) });
      res.json({ msg: 'Товар успешно добален в заказ!' });
    }
  } catch (error) {
    console.log(error);
  }
});

productRouter.delete('/order/delete/:id', checkUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;
    await Order.destroy({ where: { id, userId } });
    res.json({ success: true });
  } catch (error) {
    console.log(error, 'ошиибка при удалении из записей');
  }
});

module.exports = productRouter;
