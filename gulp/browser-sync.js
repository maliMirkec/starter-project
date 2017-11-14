const gulp = require('gulp')

// Static server
gulp.task('browser:sync', () => {
  global.bs.init({
    server: {
      baseDir: './dist/'
    }
  })

  return gulp.watch('./dist/*.html').on('change', global.bs.reload)
})
