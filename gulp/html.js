'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug')
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var minifyInline = require('gulp-minify-inline');
var fs = require('fs');

gulp.task('html', function () {
  return gulp.src('./src/html/*.pug')
    .pipe(pug())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(minifyInline())
    .pipe(replace(/<criticalcss><\/criticalcss>/g, function (match, offset, p1, string) {
      var fileContent = fs.readFileSync('./dist/css/style.critical.min.css', 'utf8');
      return '<style>'+fileContent+'</style>';
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html:dev', function () {
  return gulp.src('./src/html/*.pug')
    .pipe(pug())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(replace(/<CriticalCSS><\/CriticalCSS>/g, ''))
    .pipe(gulp.dest('./dist/'));
});
