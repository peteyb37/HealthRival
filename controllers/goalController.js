const goals = require('../services/goals');

const getGoals = (req, res, next) => {
  const userId = req.session.userId;
  goals
    .getGoals(userId)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      next(error);
    });
};

const addGoal = (req, res) => {
  const { title, index } = req.body;
  const userId = req.session.userId;

  goals
    .addNewGoal(userId, title, index)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      next(error);
    });
};

const deleteGoal = (req, res) => {
  const { id } = req.params;
  goals
    .deleteGoal(id)
    .then(() => {
      res.send(`delete item id ${id}`);
    })
    .catch(error => {
      next(error);
    });
};

const updateGoal = (req, res) => {
  const { id } = req.params;
  const value = req.body;
  goals
    .updateGoal(id, value)
    .then(() => {
      res.send(`update item id ${id}`);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  getGoals,
  addGoal,
  deleteGoal,
  updateGoal
};
