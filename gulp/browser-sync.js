const gulp = require('gulp')

// Static server
gulp.task('browser:sync', () => {
  global.bs.init({
    server: {
      baseDir: global.config.root + global.config.dest
    }
  })

  gulp.watch([`${global.config.root + global.config.dest}**/*`]).on('change', global.bs.reload)
})
