'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var gulpSequence = require('gulp-sequence');
global.bs = require('browser-sync').create();

requireDir('./gulp');

gulp.task('default:sequence', function(callback) {
  gulpSequence('css', 'critical', 'html')(callback);
});

gulp.task('default', ['default:sequence']);

gulp.task('dev:sequence', function(callback) {
  gulpSequence('css', 'html:dev', 'browser:sync', 'watch')(callback);
});

gulp.task('dev', ['dev:sequence']);
