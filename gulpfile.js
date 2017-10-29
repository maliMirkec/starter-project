'use strict';

var gulp = require('gulp');

var requireDir = require('require-dir');
var gulpSequence = require('gulp-sequence');

requireDir('./gulp');

gulp.task('default:dev', ['sequence:dev']);

gulp.task('watch:dev', function() {
  gulp.watch('./src/css/**/*.scss', function() {
    gulpSequence('css:sass', 'css:critical')(function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
});

gulp.task('default:dist', ['sequence:dist']);

gulp.task('watch:dist', function() {
  gulp.watch('./src/css/**/*.scss', function() {
    gulpSequence('css:sass', 'css:critical', 'css:autoprefix', 'css:minify')(function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
});
