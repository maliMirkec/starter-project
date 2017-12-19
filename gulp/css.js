const gulp = require('gulp')
const gulpStylelint = require('gulp-stylelint')
const sass = require('gulp-sass')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const config = require('../config.json')

gulp.task('css:sass', () => gulp.src(`${config.root + config.src + config.css.src}*.scss`)
  .pipe(gulpStylelint(config.css.styleLintConfig))
  .pipe(sass(config.css.sassConfig).on('error', sass.logError))
  .pipe(cssimport())
  .pipe(autoprefixer(config.css.autoprefixerConfig))
  .pipe(gulp.dest(config.root + config.dest + config.css.dest)))

const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

gulp.task('css:minify', () => gulp.src([`${config.root + config.dest + config.css.dest}**/*.css`, `!${config.root}${config.dest}${config.css.dest}/**/*.min.css`])
  .pipe(cleanCSS())
  .pipe(rename(config.css.renameConfig))
  .pipe(gulp.dest(config.root + config.dest + config.css.dest)))

const gulpSequence = require('gulp-sequence')

gulp.task('css', (callback) => {
  gulpSequence('css:sass', 'css:minify')(callback)
})
