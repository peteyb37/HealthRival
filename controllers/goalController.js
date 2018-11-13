const goals = require('../services/goals');
const authentication = require('../services/authentication');

const getGoals = (req, res, next) => {
  const userId = authentication.currentUser().uid;
  goals.getGoals(userId).then((result) => {
    console.log(result);
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

const deleteGoal = (req, res) => {
  const {
    id,
  } = req.params;
  goals.deleteGoal(id).then(() => {
    res.send(`delete item id ${id}`);
  }).catch(error => {
    next(error);
  });
}

const updateGoal = (req, res) => {
  const {
    id,
  } = req.params;
  const value = req.body;
  goals.updateGoal(id, value).then(() => {
    res.send(`update item id ${id}`);
  }).catch(error => {
    next(error);
  });
}

module.exports = {
  getGoals,
  addGoal,
  deleteGoal,
  updateGoal
}