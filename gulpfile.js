const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {});

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:5000",
    files: ["views/**/*.*"],
    browser: "google chrome",
    port: 7000,
  });
});
gulp.task('nodemon', function (cb) {

  let started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});