const gulp = require('gulp')
const jsdoc = require('gulp-jsdoc3')

gulp.task('jsdoc', () => gulp.src(global.config.jsdoc.src)
  .pipe(jsdoc(global.config.jsdoc.jsdocConfig)))
