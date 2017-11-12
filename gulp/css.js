const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css:sass', () => gulp.src('./src/css/style.scss')
  .pipe(gulpStylelint({
    reporters: [
      {
        formatter: 'string',
        console: true,
      },
    ],
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(cssimport())
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(global.bs.stream()));

const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('css:minify', () => gulp.src(['./dist/css/**/*.css', '!./dist/css/**/*.min.css'])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(gulp.dest('./dist/css/')));

const gulpSequence = require('gulp-sequence');

gulp.task('css', (callback) => {
  gulpSequence('css:sass', 'css:minify')(callback);
});
