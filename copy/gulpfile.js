const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
const exit = require('gulp-exit')
global.config = require('./config.json')
global.bs = require('browser-sync').create()

requireDir(global.config.root + global.config.gulp.src)

gulp.task('dev:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:dev', global.config.penthouse.run ? 'critical:dev' : '', global.config.kill.dev.run ? 'kill' : '')(callback)
})

gulp.task('dev', ['dev:sequence'])

gulp.task('docs:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:docs', 'browser:sync', global.config.kill.docs.run ? 'kill' : '')(callback)
})

gulp.task('docs', ['docs:sequence'])

gulp.task('dist:sequence', (callback) => {
  gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', 'watch:dist', global.config.penthouse.run ? 'critical:dist' : '', global.config.kill.dist.run ? 'kill' : '')(callback)
})

gulp.task('dist', ['dist:sequence'])

gulp.task('kill', () => {
  setTimeout(() => {
    global.bs.exit()

    return gulp.src(global.config.src)
      .pipe(exit())
  }, global.config.kill.timeout)
})

gulp.task('deploy:sequence', (callback) => {
  gulpSequence('clean', global.config.favicon.run ? 'favicon' : '', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js:deploy' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css:deploy' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', 'watch:dist', global.config.penthouse.run ? 'critical:dist' : '', global.config.gzip.run ? 'gzip' : '', global.config.kill.deploy.run ? 'kill' : '')(callback)
})

gulp.task('default', ['deploy:sequence'])
