'use strict';

var gulp = require('gulp');

// Static server
gulp.task('browser:sync', function () {
  global.bs.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./dist/*.html').on('change', global.bs.reload);
});
