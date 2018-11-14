const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {});

gulp.task('nodemon', function (cb) {
  let started = false;

  return nodemon({
    script: 'index.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:5000",
    files: ["views/**/*.*"],
    browser: "google chrome",
    port: 7000,
  });
});