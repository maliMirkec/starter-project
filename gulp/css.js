'use strict';

var gulp = require('gulp');
var gulpStylelint = require('gulp-stylelint');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css:sass', function() {
  return gulp.src('./src/css/style.scss')
  .pipe(gulpStylelint({
    reporters: [
      {
        formatter: 'string',
        console: true
      }
    ]
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(cssimport())
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(global.bs.stream());
});

var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('css:minify', function() {
  return gulp.src(['./dist/css/**/*.css', '!./dist/css/**/*.min.css'])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist/css/'));
});

var gulpSequence = require('gulp-sequence');

gulp.task('css', function(callback) {
  gulpSequence('css:sass', 'css:minify')(callback);
});


