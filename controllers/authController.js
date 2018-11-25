const authetication = require('../services/authentication');
const axios = require('axios');
const keys = require('../config');

const getSignIn = (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signin');
  } else {
    const { email, password } = req.body;
    authetication
      .signin(email, password)
      .then(user => {
        req.session.userId = user.uid;
        res.redirect('/');
      })
      .catch(error => {
        res.render('pages/signin', {
          error
        });
      });
  }
};

const getSignUp = (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signup');
  } else {
    const { email, password, password2 } = req.body;
    if (email && password && password2) {
      authetication
        .signUp(email, password, password2)
        .then(() => {
          res.redirect('/signin');
        })
        .catch(error => {
          res.render('pages/signup', {
            error
          });
        });
    }
  }
};

const signOut = (req, res) => {
  authetication
    .signOut()
    .then(() => {
      req.session.destroy(error => {
        if (error) {
          console.log(error);
          return;
        }
        res.redirect('/signin');
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const updateUser = (req, res, next) => {
  authetication
    .updateUser(req.body)
    .then(() => {
      res.send(`update user values ${JSON.stringify(req.body)}`);
    })
    .catch(error => {
      next(error);
    });
};

const getUserPosition = (req, res, next) => {
  const { longitude, latitude } = req.params;
  const url = `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${latitude},${longitude}&mode=retrieveAddresses&app_id=${
    keys.hereAppId
  }&app_code=${keys.hereAppCode}`;
  axios
    .get(url)
    .then(response => {
      const result = response.data.Response.View[0].Result[0].Location.Address;
      const { AdditionalData, City } = result;
      for (const data of AdditionalData) {
        if (data.key === 'StateName') {
          res.send({
            city: City,
            state: data.value
          });
          break;
        }
      }
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  getSignIn,
  getSignUp,
  signOut,
  updateUser,
  getUserPosition
};
