const gulp = require('gulp')

gulp.task('watch:dev', () => {
  gulp.watch(`${global.config.root + global.config.js.src}**/*.js`, ['js']).on('change', global.bs.reload)
  gulp.watch([
    `${global.config.root + global.config.css.src}**/*.scss`,
    `!${global.config.root + global.config.css.src}*.critical.scss`
  ], ['css:style']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.critical.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:critical']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.min.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:style']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.html.src}**/*.pug`, ['html:dev']).on('change', global.bs.reload)
})

gulp.task('watch:docs', () => {
  gulp.watch(`${global.config.root + global.config.js.src}**/*.js`, ['js']).on('change', global.bs.reload)
  gulp.watch([
    `${global.config.root + global.config.css.src}**/*.scss`,
    `!${global.config.root + global.config.css.src}*.critical.scss`
  ], ['css:style']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.critical.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:critical']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['html:dist'], global.bs.reload).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.min.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:style']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.html.src}**/*.pug`, ['html:dist']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.dest + global.config.js.dest}**/*.js`, ['jsdoc']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, ['sassdoc', 'kss']).on('change', global.bs.reload)
})

gulp.task('watch:dist', () => {
  gulp.watch(`${global.config.root + global.config.js.src}**/*.js`, ['js']).on('change', global.bs.reload)
  gulp.watch([
    `${global.config.root + global.config.css.src}**/*.scss`,
    `!${global.config.root + global.config.css.src}*.critical.scss`
  ], ['css:style']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.critical.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:critical']).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['html:dist'], global.bs.reload).on('change', global.bs.reload)
  gulp.watch([`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.min.css`, `!${global.config.root + global.config.dest + global.config.css.dest}/**/*.critical.min.css`], ['css:minify:style']).on('change', global.bs.reload)
  gulp.watch(`${global.config.root + global.config.html.src}**/*.pug`, ['html:dist']).on('change', global.bs.reload)
})
