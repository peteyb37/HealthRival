const controller = require('../controllers/userController');
const routes = require('express').Router();

routes.patch('/update', controller.updateUser);
routes.get('/profile', controller.getUser);
routes.get('/settings', controller.getSettings);
routes.get('/position/:longitude/:latitude', controller.getUserPosition);

module.exports = routes;
