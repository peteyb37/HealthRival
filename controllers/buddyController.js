const buddyService = require('../services/buddySystem');

const findUsers = (req, res, next) => {
  const { city, state } = req.body;
  const userId = req.session.userId;

  buddyService
    .findUsers(city, state)
    .then(result => {
      const response = result.filter(user => user.id !== userId);
      res.send(response);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  findUsers
};
