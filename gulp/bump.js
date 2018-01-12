const gulp = require('gulp')
const bump = require('gulp-bump')
const config = require('../config.json')

// Will patch the version
gulp.task('bump:patch', () => gulp.src([config.root + config.bump.src])
  .pipe(bump())
  .pipe(gulp.dest(config.root)))

// Will patch the version
gulp.task('bump:minor', () => gulp.src([config.root + config.bump.src])
  .pipe(bump(config.bump.minorConfig))
  .pipe(gulp.dest(config.root)))

// Will patch the version
gulp.task('bump:major', () => gulp.src([config.root + config.bump.src])
  .pipe(bump(config.bump.majorConfig))
  .pipe(gulp.dest(config.root)))
