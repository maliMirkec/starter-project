'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('sequence:dist', gulpSequence('css:sass', 'css:critical', 'css:autoprefix', 'css:minify'));

gulp.task('sequence:dev', gulpSequence('css:sass', 'css:critical'));
