const gulp = require('gulp')
const clean = require('gulp-clean')

gulp.task('clean', () => gulp.src(global.config.root + global.config.dest, { read: false })
  .pipe(clean()))
