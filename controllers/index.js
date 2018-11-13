const getHome = (req, res) => {
  res.render('index', {
    page: 'home'
  });
}

const getCompetition = (req, res) => {
  res.render('pages/competition', {
    page: 'competition'
  });
}

const getBuddySystem = (req, res) => {
  res.render('pages/buddy-system', {
    page: 'buddy-system'
  });
}

const getForums = (req, res) => {
  res.render('pages/forums', {
    page: 'forums'
  });
}

const getGoals = (req, res) => {
  res.render('pages/goals', {
    page: 'goals'
  });
}

const getSchedule = (req, res) => {
  res.render('pages/schedule', {
    page: 'schedule'
  });
}

module.exports = {
  getHome,
  getCompetition,
  getBuddySystem,
  getForums,
  getGoals,
  getSchedule,
}