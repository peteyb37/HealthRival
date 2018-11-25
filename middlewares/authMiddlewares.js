const authentication = require('../services/authentication');

const requiredAuth = (req, res, next) => {
  if (authentication.currentUser()) {
    req.user = authentication.currentUser();
    return next();
  }

  res.redirect('/signin');
};

module.exports = {
  requiredAuth
};
