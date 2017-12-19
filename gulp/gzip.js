const gulp = require('gulp')
const gzip = require('gulp-gzip')
// const config = require('./config.json')

gulp.task('gzip', () => gulp.src('./dist/**/*')
  .pipe(gzip())
  .pipe(gulp.dest('./dist/')))
