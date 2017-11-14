const gulp = require('gulp')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('js', () =>
  gulp.src(['./src/js/**/*.js'])
    .pipe(eslint({
      configFile: '.eslintrc.json',
      fix: true,
      quiet: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
      gutil.log(gutil.colors.blue(`ESLint result: ${result.filePath}`))
      gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`))
      gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`))
      gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`))
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .on('error', (err) => { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(gulp.dest('./dist/js/')))
