'use strict';

var gulp = require('gulp');
var gulpStylelint = require('gulp-stylelint');

gulp.task('css:lint', function() {
  return gulp
    .src('./src/css/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
});
