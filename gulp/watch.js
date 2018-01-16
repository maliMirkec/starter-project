const gulp = require('gulp')

gulp.task('watch:dist', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js'])
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css'])
  gulp.watch(`${global.config.root + global.config.src + global.config.html.src}**/*.pug`, ['html:dist'])
  gulp.watch(`${global.config.root + global.config.dest + global.config.css.src}style.critical.min.css`, ['html:dist'])
})

gulp.task('watch:dev', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js'])
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css'])
  gulp.watch(`${global.config.root + global.config.src + global.config.html.src}**/*.pug`, ['html:dev'])
})

gulp.task('watch:docs', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js', 'jsdoc'])
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css', 'sassdoc', 'kss'])
})
