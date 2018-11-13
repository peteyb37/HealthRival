const controller = require('../controllers/goalController');
const routes = require('express').Router();

routes.get('/goals', controller.getGoals);
routes.post('/goals/new', controller.addGoal);

module.exports = routes;