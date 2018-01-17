const gulp = require('gulp')

// Static server
gulp.task('browser:sync', () => {
  global.bs.init(global.config.browserSync.browserSyncConfig)

  gulp.watch([`${global.config.root + global.config.dest}**/*`]).on('change', global.bs.reload)
})
