const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const htmllint = require('gulp-htmllint')
const rename = require('gulp-rename')
const inlineSource = require('gulp-inline-source')
const path = require('path')

gulp.task('html:dist', () => gulp.src(`${global.config.root + global.config.src + global.config.html.src}*.pug`)
  .pipe(pug())
  .pipe(htmllint(global.config.root + global.config.html.htmllintConfig))
  .pipe(htmlmin(global.config.html.htmlminConfig))
  .pipe(inlineSource({
    rootpath: path.resolve('./dist')
  }))
  .pipe(rename(global.config.html.renameConfig))
  .pipe(gulp.dest(global.config.root + global.config.dest)))

gulp.task('html:dev', () => gulp.src(`${global.config.root + global.config.src + global.config.html.src}*.pug`)
  .pipe(pug(global.config.html.pugConfig))
  .pipe(htmllint(global.config.root + global.config.html.htmllintConfig))
  .pipe(inlineSource({
    rootpath: path.resolve(global.config.root + global.config.html.inlineSourcePath),
    ignore: ['css', 'script']
  }))
  .pipe(rename(global.config.html.renameConfig))
  .pipe(gulp.dest(global.config.root + global.config.dest)))
