const gulp = require('gulp')
const clean = require('gulp-clean')

const cleanSrc = []

Object.keys(global.config).forEach((key) => {
  if (global.config[key].run && global.config[key].clean) {
    cleanSrc.push(global.config.root + global.config.dest + global.config[key].clean)
  }
})

gulp.task('clean', () => gulp.src(cleanSrc, { read: false })
  .pipe(clean()))
