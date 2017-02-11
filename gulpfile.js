'use strict';

var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp');

gulp.task('dev', ['sequence-dev']);

gulp.task('dev-watch', ['sequence-dev'], function() {
  gulp.watch('./sass/**/*.scss', ['sequence-dev']);
});

gulp.task('dist', ['sequence-dist']);

gulp.task('dist-watch', ['sequence-dist'], function() {
  gulp.watch('./sass/**/*.scss', ['sequence-dist']);
});
