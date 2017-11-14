const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('js', () =>
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  gulp.src(['./src/js/**/*.js'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      configFile: '.eslintrc.json',
      fix: true,
      quiet: true
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
    // Called for each ESLint result.
      gutil.log(gutil.colors.blue(`ESLint result: ${result.filePath}`));
      gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`));
      gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`));
      gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`));
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .on('error', (err) => { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('./dist/js/')));
