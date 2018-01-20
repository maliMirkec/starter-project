const gulp = require('gulp')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const babel = require('gulp-babel')
const include = require('gulp-include')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('js:build', () =>
  gulp.src(`${global.config.root + global.config.js.src}**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(eslint(global.config.js.eslintConfig))
    .pipe(include(global.config.js.includeConfig))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
      gutil.log(gutil.colors.blue(`ESLint result: ${result.filePath}`))
      gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`))
      gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`))
      gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`))
    }))
    .pipe(babel(global.config.js.babelConfig))
    .on('error', (err) => {
      gutil.log(gutil.colors.red('[Error]'), err.toString())
    })
    .pipe(sourcemaps.write(global.config.root))
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.js.dest)))

const standard = require('gulp-standard')

gulp.task('js:standard', () =>
  gulp.src(`${global.config.root + global.config.js.src}**/*.js`)
    .pipe(standard())
    .pipe(standard.reporter('default', global.config.js.standardConfig)))

const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('js:uglify', () =>
  gulp.src([`${global.config.root + global.config.dest + global.config.js.dest}**/*.js`, `!${global.config.root + global.config.dest + global.config.js.dest}**/*.min.js`])
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename(global.config.js.renameConfig))
    .pipe(sourcemaps.write(global.config.root))
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.js.dest)))

const gulpSequence = require('gulp-sequence')

gulp.task('js', (callback) => {
  gulpSequence('js:build', 'js:standard', 'js:uglify')(callback)
})

gulp.task('js:build:deploy', () =>
  gulp.src(`${global.config.root + global.config.js.src}**/*.js`)
    .pipe(eslint(global.config.js.eslintConfig))
    .pipe(include(global.config.js.includeConfig))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
      gutil.log(gutil.colors.blue(`ESLint result: ${result.filePath}`))
      gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`))
      gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`))
      gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`))
    }))
    .pipe(babel(global.config.js.babelConfig))
    .on('error', (err) => {
      gutil.log(gutil.colors.red('[Error]'), err.toString())
    })
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.js.dest)))

gulp.task('js:standard:deploy', () =>
  gulp.src(`${global.config.root + global.config.js.src}**/*.js`)
    .pipe(standard())
    .pipe(standard.reporter('default', global.config.js.standardConfig)))

gulp.task('js:uglify:deploy', () =>
  gulp.src([`${global.config.root + global.config.dest + global.config.js.dest}**/*.js`, `!${global.config.root + global.config.dest + global.config.js.dest}**/*.min.js`])
    .pipe(uglify())
    .pipe(rename(global.config.js.renameConfig))
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.js.dest)))

gulp.task('js:deploy', (callback) => {
  gulpSequence('js:build:deploy', 'js:standard:deploy', 'js:uglify:deploy')(callback)
})
