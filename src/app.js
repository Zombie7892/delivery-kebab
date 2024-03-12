require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const userRouter = require('./routes/user.router');
const indexRouter = require('./routes/index.router');

const dbConnectionCheck = require('../db/dbConnectCheck');
const { checkUser } = require('./middlewares/common');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Exam2',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
dbConnectionCheck();

app.use('/user', userRouter);
app.use('/', indexRouter);

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});
