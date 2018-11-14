const authetication = require('../services/authentication');

const getSignIn = (req, res) => {
  if (authetication.currentUser()) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signin');
  } else {
    const {
      email,
      password
    } = req.body;
    authetication.signin(email, password).then(() => {
      res.redirect('/');
    }).catch(error => {
      res.render('pages/signin', {
        error
      });
    });
  }
}

const getSignUp = (req, res) => {
  if (authetication.currentUser()) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signup');
  } else {
    const {
      email,
      password,
      password2
    } = req.body;
    if (email && password && password2) {
      authetication.signUp(email, password, password2).then(() => {
        res.redirect('/signin');
      }).catch(error => {
        res.render('pages/signup', {
          error
        });
      });
    }
  }
}

const signOut = (req, res) => {
  authetication.signOut().then(() => {
    res.redirect('/signin');
  }).catch(error => {
    console.log(error);
  });
}

module.exports = {
  getSignIn,
  getSignUp,
  signOut
}