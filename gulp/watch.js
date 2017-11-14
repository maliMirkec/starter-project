const gulp = require('gulp')

gulp.task('watch', () => {
  gulp.watch('./src/hs/**/*.js', ['js'])
  gulp.watch('./src/css/**/*.scss', ['css'])
  gulp.watch('./src/html/**/*.pug', ['html:dev'])
})
