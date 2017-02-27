'use strict';

var gulp = require('gulp');
var criticalCss = require('gulp-critical-css');
var stripCssComments = require('gulp-strip-css-comments');
var removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task('css:critical', function() {
  return gulp.src('./style.css')
  .pipe(criticalCss())
  .pipe(stripCssComments({
    'preserve': false
  }))
  .pipe(removeEmptyLines())
  .pipe(gulp.dest('./dev/css'));
});
