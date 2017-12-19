const gulp = require('gulp')
const config = require('../config.json')

gulp.task('fonts', () => {
  gulp.src(`${config.root + config.src + config.fonts.src}**/*`)
    .pipe(gulp.dest(config.root + config.dest + config.fonts.dest))
})
