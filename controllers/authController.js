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
      console.log('successful login');
      res.redirect('/');
    }).catch(error => {
      console.log(error);
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
        console.log('successfull signup');
        res.redirect('/signin');
      }).catch(error => {
        console.log(error);
        res.render('pages/signup', {
          error
        });
      });
    }
  }
}

const signOut = (req, res) => {
  authetication.signOut().then(() => {
    console.log('sign out successfully');
    res.redirect('/signin');
    console.log(authetication.currentUser());
  }).catch(error => {
    console.log(error);
  });
}

module.exports = {
  getSignIn,
  getSignUp,
  signOut
}