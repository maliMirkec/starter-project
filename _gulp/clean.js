const gulp = require('gulp')
const clean = require('gulp-clean')

const cleanSrc = []

Object.keys(global.config).forEach((key) => {
  if (global.config[key].run && global.config[key].clean) {
    if (Array.isArray(global.config[key].clean)) {
      global.config[key].clean.forEach((aKey) => {
        cleanSrc.push(global.config.root + global.config.dest + aKey)
      })
    } else {
      cleanSrc.push(global.config.root + global.config.dest + global.config[key].clean)
    }
  }
})

gulp.task('clean', () => gulp.src(cleanSrc, { read: false })
  .pipe(clean()))
