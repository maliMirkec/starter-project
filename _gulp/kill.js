const gulp = require('gulp')
const exit = require('gulp-exit')
const wait = require('gulp-wait')
const runSequence = require('run-sequence').use(gulp)

gulp.task('kill:browser-sync', () => global.bs.exit())

gulp.task('kill:instantly', () => gulp.src(global.config.src)
  .pipe(exit())
  .pipe(gulp.dest(global.config.dest)))

gulp.task('kill:slowly', () => gulp.src(global.config.src)
  .pipe(wait(global.config.kill.timeout))
  .pipe(exit())
  .pipe(gulp.dest(global.config.dest)))

gulp.task('kill:now', callback => runSequence('kill:instantly', 'kill:browser-sync', callback))
gulp.task('kill:delay', callback => runSequence('kill:slowly', 'kill:browser-sync', callback))
