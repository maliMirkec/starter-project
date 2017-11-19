const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const htmllint = require('gulp-htmllint')
const rename = require('gulp-rename')
const inlineSource = require('gulp-inline-source')
const path = require('path')

gulp.task('html:dist', () => gulp.src('./src/html/*.pug')
  .pipe(pug())
  .pipe(htmllint('.htmllintrc'))
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(inlineSource({
    rootpath: path.resolve('./dist')
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(gulp.dest('./dist/')))

gulp.task('html:dev', () => gulp.src('./src/html/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(htmllint())
  .pipe(inlineSource({
    rootpath: path.resolve('./dist')
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(gulp.dest('./dist/')))
