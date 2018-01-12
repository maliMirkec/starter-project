const gulp = require('gulp')
const jsdoc = require('gulp-jsdoc3')
const config = require('../config.json')

gulp.task('jsdoc', () => gulp.src(config.jsdoc.src)
  .pipe(jsdoc(config.jsdoc.jsdocConfig)))
