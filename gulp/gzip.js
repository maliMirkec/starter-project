const gulp = require('gulp')
const gzip = require('gulp-gzip')

gulp.task('gzip', () => gulp.src(`${global.config.root + global.config.dest + global.config.gzip.src}/**/*`)
  .pipe(gzip(global.config.gzip.gzipConfig))
  .pipe(gulp.dest(global.config.root + global.config.dest + global.config.gzip.dest)))
