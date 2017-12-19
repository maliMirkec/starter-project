const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
const exit = require('gulp-exit')
const config = require('./config.json')
global.bs = require('browser-sync').create()

requireDir(config.root + config.gulp.src)

gulp.task('dist:sequence', (callback) => {
  gulpSequence('clean', config.gfx.run ? 'gfx' : '', config.fonts.run ? 'fonts' : '', config.js.run ? 'js' : '', config.css.run ? 'css' : '', config.html.run ? 'html:dist' : '', 'watch:dist', config.penthouse.run ? 'critical:dist' : '')(callback)
})

gulp.task('dist', ['dist:sequence'])

gulp.task('dev:sequence', (callback) => {
  gulpSequence('clean', config.gfx.run ? 'gfx' : '', config.fonts.run ? 'fonts' : '', config.js.run ? 'js' : '', config.css.run ? 'css' : '', config.html.run ? 'html:dev' : '', 'watch:dev', config.penthouse.run ? 'critical:dev' : '')(callback)
})

gulp.task('dev', ['dev:sequence'])

gulp.task('kill', () => {
  global.bs.exit()

  gulp.src(config.src)
    .pipe(exit())
})

gulp.task('deploy:sequence', (callback) => {
  gulpSequence('clean', config.favicon.run ? 'favicon' : '', config.gfx.run ? 'gfx' : '', config.fonts.run ? 'fonts' : '', config.js.run ? 'js' : '', config.css.run ? 'css' : '', config.html.run ? 'html:dist' : '', config.penthouse.run ? 'critical:dist' : '', 'kill')(callback)
})

gulp.task('default', ['deploy:sequence'])
