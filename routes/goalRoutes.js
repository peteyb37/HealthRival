const controller = require('../controllers/goalController');
const routes = require('express').Router();

routes.get('/goals', controller.getGoals);
routes.post('/goals/new', controller.addGoal);
routes.delete('/goals/:id', controller.deleteGoal);
routes.patch('/goals/:id', controller.updateGoal);

module.exports = routes;