const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
const exit = require('gulp-exit')
global.config = require('./config.json')
global.bs = require('browser-sync').create()

requireDir(global.config.root + global.config.gulp.src)

gulp.task('dist:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', 'watch:dist', global.config.penthouse.run ? 'critical:dist' : '')(callback)
})

gulp.task('dist', ['dist:sequence'])

gulp.task('dev:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:dev', global.config.penthouse.run ? 'critical:dev' : '')(callback)
})

gulp.task('dev', ['dev:sequence'])

gulp.task('docs:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:docs', 'browser:sync')(callback)
})

gulp.task('docs', ['docs:sequence'])

gulp.task('kill', () => {
  global.bs.exit()

  gulp.src(global.config.src)
    .pipe(exit())
})

gulp.task('deploy:sequence', (callback) => {
  gulpSequence('clean', global.config.favicon.run ? 'favicon' : '', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js:deploy' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css:deploy' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', global.config.penthouse.run ? 'critical:deploy' : '', global.config.gzip.run ? 'gzip' : '', 'kill')(callback)
})

gulp.task('default', ['deploy:sequence'])
