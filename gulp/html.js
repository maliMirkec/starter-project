const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const htmllint = require('gulp-htmllint')
const rename = require('gulp-rename')
const inlineSource = require('gulp-inline-source')
const path = require('path')
const config = require('../config.json')

gulp.task('html:dist', () => gulp.src(`${config.root + config.src + config.html.src}*.pug`)
  .pipe(pug())
  .pipe(htmllint(config.root + config.html.htmllintConfig))
  .pipe(htmlmin(config.html.htmlminConfig))
  .pipe(inlineSource({
    rootpath: path.resolve('./dist')
  }))
  .pipe(rename(config.html.renameConfig))
  .pipe(gulp.dest(config.root + config.dest)))

gulp.task('html:dev', () => gulp.src(`${config.root + config.src + config.html.src}*.pug`)
  .pipe(pug(config.html.pugConfig))
  .pipe(htmllint(config.root + config.html.htmllintConfig))
  .pipe(inlineSource({
    rootpath: path.resolve(config.root + config.html.inlineSourcePath),
    ignore: ['css', 'script']
  }))
  .pipe(rename(config.html.renameConfig))
  .pipe(gulp.dest(config.root + config.dest)))
