const buddyService = require('../services/buddySystem');

const findUsers = (req, res, next) => {
  const { city, state } = req.body;

  buddyService
    .findUsers(city, state)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  findUsers
};
