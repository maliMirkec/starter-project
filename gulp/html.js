const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const inlineSource = require('gulp-inline-source')
const path = require('path')

gulp.task('html:dist', () => gulp.src('./src/html/*.pug')
  .pipe(pug())
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
  .pipe(pug())
  .pipe(inlineSource({
    rootpath: path.resolve('./dist')
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(gulp.dest('./dist/')))
