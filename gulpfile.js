'use strict';

var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp');

gulp.task('default:dev', ['sequence:dev']);

gulp.task('default:dist', ['sequence:dist']);
