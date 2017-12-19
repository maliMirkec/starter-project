const gulp = require('gulp')
const criticalCss = require('gulp-penthouse')
const gulpSequence = require('gulp-sequence')
const config = require('../config.json')

gulp.task('penthouse', () => gulp.src(config.root + config.dest + config.css.dest + config.penthouse.src)
  .pipe(criticalCss(config.penthouse.criticalCssConfig))
  .pipe(gulp.dest(config.root)))

gulp.task('critical-dev:sequence', (callback) => {
  gulpSequence('browser:sync', 'penthouse')(callback)
})

gulp.task('critical:dev', ['critical-dev:sequence'])

gulp.task('critical-dist:sequence', (callback) => {
  gulpSequence('critical-dev:sequence', 'css:minify', 'html:dist')(callback)
})

gulp.task('critical:dist', ['critical-dist:sequence'])

gulp.task('critical-deploy:sequence', (callback) => {
  gulpSequence('critical-dev:sequence', 'css:minify:deploy', 'html:dist')(callback)
})

gulp.task('critical:deploy', ['critical-deploy:sequence'])
