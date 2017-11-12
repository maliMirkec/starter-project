const gulp = require('gulp');
const bump = require('gulp-bump');

// Will patch the version
gulp.task('bump:patch', () => gulp.src(['./package.json', 'bower.json'])
  .pipe(bump())
  .pipe(gulp.dest('./')));

// Will patch the version
gulp.task('bump:minor', () => gulp.src(['./package.json', 'bower.json'])
  .pipe(bump({
    type: 'minor',
  }))
  .pipe(gulp.dest('./')));

// Will patch the version
gulp.task('bump:major', () => gulp.src(['./package.json', 'bower.json'])
  .pipe(bump({
    type: 'major',
  }))
  .pipe(gulp.dest('./')));
