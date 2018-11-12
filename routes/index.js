const controller = require('../controllers');

module.exports = app => {
  app.get('/', controller.getHome);
  app.get('/competition', controller.getCompetition);
  app.get('/buddy-system', controller.getBuddySystem);
  app.get('/forums', controller.getForums);
  app.get('/goals', controller.getGoals);
  app.get('/schedule', controller.getSchedule);
};