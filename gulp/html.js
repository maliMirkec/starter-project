const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const minifyInline = require('gulp-minify-inline')
const fs = require('fs')

gulp.task('html', () => gulp.src('./src/html/*.pug')
  .pipe(pug())
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(minifyInline())
  .pipe(replace(/<criticalcss><\/criticalcss>/g, () => {
    const fileContent = fs.readFileSync('./dist/css/style.critical.min.css', 'utf8')
    return `<style>${fileContent}</style>`
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(gulp.dest('./dist/')))

gulp.task('html:dev', () => gulp.src('./src/html/*.pug')
  .pipe(pug())
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(replace(/<CriticalCSS><\/CriticalCSS>/g, ''))
  .pipe(gulp.dest('./dist/')))
