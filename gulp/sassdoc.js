const gulp = require('gulp')
const sassdoc = require('sassdoc')
const config = require('../config.json')

gulp.task('sassdoc', () => gulp.src(`${config.root + config.src + config.css.src}**/*.scss`)
  .pipe(sassdoc(config.sassdoc.config)))
