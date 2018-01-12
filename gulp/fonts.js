const gulp = require('gulp')

gulp.task('fonts', () => {
  gulp.src(`${global.config.root + global.config.src + global.config.fonts.src}**/*`)
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.fonts.dest))
})
