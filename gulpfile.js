const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
const exit = require('gulp-exit')
const config = require('./config.json')
global.bs = require('browser-sync').create()

requireDir(config.root + config.gulp.src)

gulp.task('dist:sequence', (callback) => {
  gulpSequence('clean', 'gfx', 'fonts', 'js', 'css', 'html:dist', 'watch:dist', 'critical:dist')(callback)
})

gulp.task('dist', ['dist:sequence'])

gulp.task('dev:sequence', (callback) => {
  gulpSequence('clean', 'gfx', 'fonts', 'js', 'css', 'html:dev', 'watch:dev', 'critical:dev')(callback)
})

gulp.task('dev', ['dev:sequence'])

gulp.task('kill', () => {
  global.bs.exit()

  gulp.src(config.src)
    .pipe(exit())
})

gulp.task('deploy:sequence', (callback) => {
  gulpSequence('clean', 'gfx', 'fonts', 'js', 'css', 'html:dist', 'critical:dist', 'kill')(callback)
})

gulp.task('default', ['deploy:sequence'])
