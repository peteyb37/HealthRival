const authetication = require('../services/authentication');
const axios = require('axios');
const keys = require('../config');

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

const getUser = (req, res, next) => {
  const userId = req.session.userId;
  if (userId) {
    authetication
      .getUser(userId)
      .then(user => {
        res.render('pages/user/user-profile', {
          page: 'user-profile',
          user
        });
      })
      .catch(error => next(error));
  } else {
    next(new Error('Cannot find userId from session'));
  }
};

const getSettings = (req, res, next) => {
  res.render('pages/user/settings', {
    page: 'user-settings'
  });
};

module.exports = {
  updateUser,
  getUserPosition,
  getUser,
  getSettings
};
