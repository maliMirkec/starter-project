const gulp = require('gulp')

gulp.task('update:config', () => gulp.src(`${global.config.root}node_modules/starter-project/copy/config.json`)
  .pipe(gulp.dest(global.config.root)))

gulp.task('update:gulpfile', () => gulp.src(`${global.config.root}node_modules/starter-project/copy/gulpfile.js`)
  .pipe(gulp.dest(global.config.root)))

gulp.task('update:source', () => gulp.src(`${global.config.root}node_modules/starter-project/copy/*`)
  .pipe(gulp.dest(global.config.root + global.config.src)))

gulp.task('update:tasks', () => gulp.src(`${global.config.root}node_modules/starter-project/_gulp/*`)
  .pipe(gulp.dest(global.config.root + global.config.gulp.src)))

gulp.task('update:all', ['update:config', 'update:gulpfile', 'update:source', 'update:tasks'])
