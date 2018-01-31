const gulp = require('gulp')

// Static server
gulp.task('browser:sync', () => global.bs.init(global.config.browserSync.browserSyncConfig))
