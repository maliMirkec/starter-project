const gulp = require('gulp')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const babel = require('gulp-babel')

gulp.task('js:build', () =>
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
    .on('error', (err) => {
      gutil.log(gutil.colors.red('[Error]'), err.toString())
    })
    .pipe(gulp.dest('./dist/js/')))

const standard = require('gulp-standard')

gulp.task('js:standard', () =>
  gulp.src(['./dist/js/**/*.js', '!./dist/js/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    })))

const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('js:uglify', () =>
  gulp.src(['./dist/js/**/*.js', '!./dist/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/')))

const gulpSequence = require('gulp-sequence')

gulp.task('js', (callback) => {
  gulpSequence('js:build', 'js:standard', 'js:uglify')(callback)
})
