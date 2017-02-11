'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('sequence-dist', ['sass'], function() {
    return runSequence('sass', 'critical', 'autoprefix', 'minify');
});

gulp.task('sequence-dev', ['sass'], function() {
    return runSequence('sass', 'critical');
});
