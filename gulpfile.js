const gulp = require('gulp')
const requireDir = require('require-dir')
const gulpSequence = require('gulp-sequence')
global.bs = require('browser-sync').create()

requireDir('./gulp')

gulp.task('default:sequence', (callback) => {
  gulpSequence('js', 'css', 'critical', 'html')(callback)
})

gulp.task('default', ['default:sequence'])

gulp.task('dev:sequence', (callback) => {
  gulpSequence('js', 'css', 'html:dev', 'browser:sync', 'watch')(callback)
})

gulp.task('dev', ['dev:sequence'])
