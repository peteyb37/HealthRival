const goals = require('../services/goals');

const getHome = (req, res) => {
  res.render('pages/home', {
    page: 'home'
  });
};

const getCompetition = (req, res) => {
  res.render('pages/competition', {
    page: 'competition'
  });
};

const getBuddySystem = (req, res) => {
  res.render('pages/buddy-system', {
    page: 'buddy-system'
  });
};

const getForums = (req, res) => {
  res.render('pages/forums', {
    page: 'forums'
  });
};

const getGoals = (req, res, next) => {
  const userId = req.user.uid;
  goals
    .getGoals(userId)
    .then(result => {
      res.render('pages/goals', {
        page: 'goals',
        goals: result
      });
    })
    .catch(error => {
      next(error);
    });
};

const getSchedule = (req, res) => {
  res.render('pages/schedule', {
    page: 'schedule'
  });
};

module.exports = {
  getHome,
  getCompetition,
  getBuddySystem,
  getForums,
  getGoals,
  getSchedule
};
