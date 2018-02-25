const gulp = require('gulp')
const criticalCss = require('gulp-penthouse')
const runSequence = require('run-sequence')

gulp.task('penthouse', () => global.config.penthouse.criticalCssConfigs.forEach(config => gulp.src(`${global.config.root + global.config.dest +
    global.config.css.dest + global.config.penthouse.src}`)
  .pipe(criticalCss(config))
  .pipe(gulp.dest(global.config.root))))

gulp.task('critical:dev', ['penthouse'])

gulp.task('critical:dist', callback => runSequence('penthouse', 'css:minify:deploy', callback))

gulp.task('critical:deploy', callback => runSequence('penthouse', 'css:minify:deploy', callback))
