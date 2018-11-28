const controller = require('../controllers/userController');
const routes = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

const imageFilter = function(req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const uploader = multer({ storage: storage, fileFilter: imageFilter });

routes.get('/api/info', controller.getUserInfo);

routes.patch('/update', controller.updateUser);
routes.get('/profile', controller.getUser);
routes.post(
  '/profile/update',
  uploader.single('avatar'),
  controller.updateUserProfile
);
routes.get('/settings', controller.getSettings);
routes.post('/settings/update', controller.updateSettings);
routes.get('/position/:longitude/:latitude', controller.getUserPosition);

module.exports = routes;
