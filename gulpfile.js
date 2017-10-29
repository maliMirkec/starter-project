'use strict';

var gulp = require('gulp');

var requireDir = require('require-dir');
var gulpSequence = require('gulp-sequence');

requireDir('./gulp');

gulp.task('default:dev', ['sequence:dev']);

gulp.task('watch:dev', function() {
  gulp.watch('./src/css/**/*.scss', ['sequence:dev']);
});

gulp.task('default:dist', ['sequence:dist']);

gulp.task('watch:dist', function() {
  gulp.watch('./src/css/**/*.scss', ['sequence:dist']);
});

gulp.task('default', ['html:minify', 'sequence:dist'])
