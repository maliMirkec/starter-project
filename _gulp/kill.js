const gulp = require('gulp')
const exit = require('gulp-exit')
const wait = require('gulp-wait')
const gulpSequence = require('gulp-sequence')

gulp.task('kill:browser-sync', () => global.bs.exit())

gulp.task('kill:intantly', () => {
  global.bs.exit()

  return gulp.src(global.config.src)
    .pipe(exit())
})

gulp.task('kill:slowly', () => gulp.src(global.config.src)
  .pipe(wait(global.config.kill.timeout))
  .pipe(exit()))

gulp.task('kill:now', callback => gulpSequence('kill:instantly', 'kill:browser-sync')(callback))
gulp.task('kill:delay', callback => gulpSequence('kill:slowly', 'kill:browser-sync')(callback))
