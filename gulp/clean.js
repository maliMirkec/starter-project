const gulp = require('gulp')
const clean = require('gulp-clean')
const config = require('../config.json')

gulp.task('clean', () => gulp.src(config.root + config.dest, { read: false })
  .pipe(clean()))
