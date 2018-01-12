const gulp = require('gulp')
const sassdoc = require('sassdoc')

gulp.task('sassdoc', () => gulp.src(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`)
  .pipe(sassdoc(global.config.sassdoc.sassdocConfig)))
