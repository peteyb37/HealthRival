const controller = require('../controllers/authController');
const routes = require('express').Router();

routes.get('/signin', controller.getSignIn);
routes.post('/signin', controller.getSignIn);
routes.get('/signup', controller.getSignUp);
routes.post('/signup', controller.getSignUp);
routes.get('/signOut', controller.signOut);

module.exports = routes;