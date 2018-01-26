const gulp = require('gulp')
const criticalCss = require('gulp-penthouse')
const gulpSequence = require('gulp-sequence')

console.log(global.config.root + global.config.dest + global.config.css.dest + global.config.penthouse.src)

gulp.task('penthouse', () => gulp.src(global.config.root + global.config.dest + global.config.css.dest + global.config.penthouse.src)
  .pipe(criticalCss(global.config.penthouse.criticalCssConfig))
  .pipe(gulp.dest(global.config.root)))

gulp.task('critical-dev:sequence', (callback) => {
  gulpSequence('browser:sync', 'penthouse', 'css:minify')(callback)
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
