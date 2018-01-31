const gulp = require('gulp')
const bump = require('gulp-bump')

// Will patch the version
gulp.task('bump:patch', () => gulp.src([global.config.root + global.config.bump.src])
  .pipe(bump())
  .pipe(gulp.dest(global.config.root)))

// Will patch the version
gulp.task('bump:minor', () => gulp.src([global.config.root + global.config.bump.src])
  .pipe(bump(global.config.bump.minorConfig))
  .pipe(gulp.dest(global.config.root)))

// Will patch the version
gulp.task('bump:major', () => gulp.src([global.config.root + global.config.bump.src])
  .pipe(bump(global.config.bump.majorConfig))
  .pipe(gulp.dest(global.config.root)))
