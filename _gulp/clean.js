const gulp = require('gulp')
const clean = require('gulp-clean')

const cleanSrc = []

Object.entries(global.config).forEach(([key, value]) => {
  if (value.run && value.dest) {
    cleanSrc.push(global.config.root + global.config.dest + value.dest)
  }
})

gulp.task('clean', () => gulp.src(cleanSrc, { read: false })
  .pipe(clean()))
