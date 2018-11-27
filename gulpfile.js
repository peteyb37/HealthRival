const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

const config = require('./config/gulp');

//SERVER
gulp.task('server', function(cb) {
  var called = false;
  return nodemon(config.plugins.nodemon).on('start', function() {
    if (!called) {
      called = true;
      cb();
    }
  });
});

// BROWSER-SYNC
function browserSyncInit(done) {
  browserSync.init(config.plugins.browserSync);
  done();
}
gulp.task('browser-sync', browserSyncInit);

//DEFAULT
gulp.task('default', gulp.series('server', 'browser-sync'));
