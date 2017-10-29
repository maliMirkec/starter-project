'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('css:minify', function() {
  return gulp.src('./dev/css/**/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/css/'));
});

var htmlmin = require('gulp-htmlmin');

gulp.task('html:minify', function() {
  return gulp.src('./src/html/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist/'));
});
