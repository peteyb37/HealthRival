const goals = require('../services/goals');
const authentication = require('../services/authentication');

const getGoals = (req, res, next) => {
  const userId = authentication.currentUser().uid;
  goals.getGoals(userId).then((result) => {
    res.send(result);
  }).catch(error => {
    next(error);
  });
}

const addGoal = (req, res) => {
  const {
    title,
  } = req.body;
  const userId = authentication.currentUser().uid;
  goals.addNewGoal(userId, title).then(result => {
    res.send(result);
  }).catch(error => {
    next(error);
  });
}

module.exports = {
  getGoals,
  addGoal,
}