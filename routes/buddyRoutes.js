const controller = require('../controllers/buddyController');
const routes = require('express').Router();

routes.post('/users/find', controller.findUsers);

module.exports = routes;
