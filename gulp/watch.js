const gulp = require('gulp')

gulp.task('watch:dist', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js'])
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css'])
  gulp.watch(`${global.config.root + global.config.src + global.config.html.src}**/*.pug`, ['html:dist'])
  gulp.watch(`${global.config.root + global.config.dest + global.config.css.src}style.critical.min.css`, ['html:dist'])
})

gulp.task('watch:dev', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.src + global.config.html.src}**/*.pug`, ['html:dev']).on('change', global.bs.reload)
})

gulp.task('watch:docs', () => {
  gulp.watch(`${global.config.root + global.config.src + global.config.js.src}**/*.js`, ['js'])
  gulp.watch(`${global.config.root + global.config.src + global.config.css.src}**/*.scss`, ['css'])
  gulp.watch(`${global.config.root + global.config.src + global.config.html.src}**/*.pug`, ['html:dist'])
  gulp.watch(`${global.config.root + global.config.dest + global.config.css.src}style.critical.min.css`, ['html:dist'])
  gulp.watch(`${global.config.root + global.config.dest + global.config.js.dest}**/*.js`, ['jsdoc']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, ['sassdoc', 'kss']).on('change', global.bs.reload)
})
