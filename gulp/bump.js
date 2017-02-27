'use strict';

var gulp = require('gulp');
var bump = require('gulp-bump');

// Will patch the version
gulp.task('bump:patch', function() {
  return gulp.src(['./package.json', 'bower.json'])
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

// Will patch the version
gulp.task('bump:minor', function() {
  return gulp.src(['./package.json', 'bower.json'])
  .pipe(bump({
    type: 'minor'
  }))
  .pipe(gulp.dest('./'));
});

// Will patch the version
gulp.task('bump:major', function() {
  return gulp.src(['./package.json', 'bower.json'])
  .pipe(bump({
    type: 'major'
  }))
  .pipe(gulp.dest('./'));
});
