const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
global.config = require('./config.json')
global.bs = require('browser-sync').create()

requireDir(global.config.root + global.config.gulp.src)

gulp.task('dev:sequence', callback => gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:dev', 'browser:sync', global.config.penthouse.run ? 'critical:dev' : '', global.config.kill.dev.run ? 'kill:delay' : '')(callback))

gulp.task('dev', ['dev:sequence'])

gulp.task('docs:sequence', callback => gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dev' : '', 'watch:docs', 'browser:sync', global.config.kill.docs.run ? 'kill:delay' : '')(callback))

gulp.task('docs', ['docs:sequence'])

gulp.task('dist:sequence', callback => gulpSequence('clean', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', 'watch:dist', 'browser:sync', global.config.penthouse.run ? 'critical:dist' : '', global.config.kill.dist.run ? 'kill:delay' : '')(callback))

gulp.task('dist', ['dist:sequence'])

gulp.task('deploy:sequence', callback => gulpSequence('clean', global.config.favicon.run ? 'favicon' : '', global.config.gfx.run ? 'gfx' : '', global.config.fonts.run ? 'fonts' : '', global.config.js.run ? 'js:deploy' : '', global.config.jsdoc.run ? 'jsdoc' : '', global.config.css.run ? 'css:deploy' : '', global.config.sassdoc.run ? 'sassdoc' : '', global.config.kss.run ? 'kss' : '', global.config.html.run ? 'html:dist' : '', 'watch:dist', 'browser:sync', global.config.penthouse.run ? 'critical:deploy' : '', global.config.gzip.run ? 'gzip' : '', global.config.kill.deploy.run ? 'kill:delay' : '')(callback))

gulp.task('default', ['deploy:sequence'])
