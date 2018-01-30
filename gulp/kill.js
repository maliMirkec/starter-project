const gulp = require('gulp')
const exit = require('gulp-exit')
const wait = require('gulp-wait')

gulp.task('kill:now', () => {
  global.bs.exit()

  return gulp.src(global.config.src)
    .pipe(exit())
})

gulp.task('kill:delay', () => {
  global.bs.exit()

  return gulp.src(global.config.src)
    .pipe(wait(global.config.kill.timeout))
    .pipe(exit())
})
