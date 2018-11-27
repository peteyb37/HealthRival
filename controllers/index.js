const goals = require('../services/goals');

const getHome = (req, res) => {
  res.render('pages/main/home', {
    page: 'home'
  });
};

const getCompetition = (req, res) => {
  res.render('pages/main/competition', {
    page: 'competition'
  });
};

const getBuddySystem = (req, res) => {
  res.render('pages/main/buddy-system', {
    page: 'buddy-system'
  });
};

const getForums = (req, res) => {
  res.render('pages/main/forums', {
    page: 'forums'
  });
};

const getGoals = (req, res, next) => {
  const userId = req.session.userId;
  goals
    .getGoals(userId)
    .then(result => {
      res.render('pages/main/goals', {
        page: 'goals',
        goals: result
      });
    })
    .catch(error => {
      next(error);
    });
};

const getSchedule = (req, res) => {
  res.render('pages/main/schedule', {
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
