'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');

gulp.task('sass', function() {
  gulp.src('./src/css/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssimport())
  .pipe(gulp.dest('./'));
});

gulp.task('sass-sync', function() {
  gulp.src('./src/css/style.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(cssimport())
  .pipe(gulp.dest('./'));
});
