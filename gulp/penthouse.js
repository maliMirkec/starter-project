'use strict';

var gulp = require('gulp');
var criticalCss = require('gulp-penthouse');
var gulpSequence = require('gulp-sequence');

gulp.task('penthouse', function() {
  return gulp.src('./dist/css/style.css')
    .pipe(criticalCss({
      out: './dist/css/style.critical.css',
      url: 'http://localhost:3000',
      width: 1366,
      height: 768,
      keepLargerMediaQueries: true,
      strict: false,
      blockJSRequests: false
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('critical:sequence', function(callback) {
  gulpSequence('browser:sync', 'penthouse')(callback);
});

gulp.task('critical', ['critical:sequence']);
