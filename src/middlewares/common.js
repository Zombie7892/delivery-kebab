
function checkUser(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect('/user/login');
  }
}

module.exports = { checkUser };
