const gulp = require('gulp')
const config = require('../config.json')

gulp.task('watch:dist', () => {
  gulp.watch(`${config.root + config.src + config.js.src}**/*.js`, ['js'])
  gulp.watch(`${config.root + config.src + config.css.src}**/*.scss`, ['sassdoc', 'kss', 'css'])
  gulp.watch(`${config.root + config.src + config.html.src}**/*.pug`, ['html:dist'])
  gulp.watch(`${config.root + config.dest + config.css.src}style.critical.min.css`, ['html:dist'])
})

gulp.task('watch:dev', () => {
  gulp.watch(`${config.root + config.src + config.js.src}**/*.js`, ['js'])
  gulp.watch(`${config.root + config.src + config.css.src}**/*.scss`, ['sassdoc', 'kss', 'css'])
  gulp.watch(`${config.root + config.src + config.html.src}**/*.pug`, ['html:dev'])
})
