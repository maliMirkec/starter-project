const gulp = require('gulp')
const config = require('../config.json')

// Static server
gulp.task('browser:sync', () => {
  global.bs.init({
    server: {
      baseDir: config.root + config.dest
    }
  })

  return gulp.watch([`${config.root + config.dest}**/*`]).on('change', global.bs.reload)
})
