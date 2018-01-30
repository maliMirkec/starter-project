const gulp = require('gulp')
const exit = require('gulp-exit')

gulp.task('kill:now', () => {
  global.bs.exit()

  return gulp.src(global.config.src)
    .pipe(exit())
})

gulp.task('kill:delay', () => {
  setTimeout(() => {
    global.bs.exit()

    return gulp.src(global.config.src)
      .pipe(exit())
  }, global.config.kill.timeout)
})
