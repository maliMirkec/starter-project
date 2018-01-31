const gulp = require('gulp')
const criticalCss = require('gulp-penthouse')
const gulpSequence = require('gulp-sequence')

gulp.task('penthouse', () => global.config.penthouse.criticalCssConfigs.forEach(config => gulp.src(`${global.config.root + global.config.dest +
    global.config.css.dest + global.config.penthouse.src}`)
  .pipe(criticalCss(config))
  .pipe(gulp.dest(global.config.root))))

gulp.task('critical-dev:sequence', callback => gulpSequence('browser:sync', 'penthouse')(callback))

gulp.task('critical:dev', ['critical-dev:sequence'])

gulp.task('critical-dist:sequence', callback => gulpSequence('browser:sync', 'penthouse')(callback))

gulp.task('critical:dist', ['critical-dist:sequence', 'css:minify:deploy'])

gulp.task('critical-deploy:sequence', callback => gulpSequence('penthouse')(callback))

gulp.task('critical:deploy', ['critical-deploy:sequence', 'css:minify:deploy'])
