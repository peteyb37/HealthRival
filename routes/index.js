const controller = require('../controllers');
const routes = require('express').Router();

routes.get('/', controller.getHome);
routes.get('/competition', controller.getCompetition);
routes.get('/buddy-system', controller.getBuddySystem);
routes.get('/forums', controller.getForums);
routes.get('/goals', controller.getGoals);
routes.get('/schedule', controller.getSchedule);

module.exports = routes;