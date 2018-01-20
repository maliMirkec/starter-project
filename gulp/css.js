const gulp = require('gulp')
const gulpStylelint = require('gulp-stylelint')
const sass = require('gulp-sass')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('css:sass', () => gulp.src(`${global.config.root + global.config.css.src}*.scss`)
  .pipe(sourcemaps.init())
  .pipe(gulpStylelint(global.config.css.styleLintConfig))
  .pipe(sass(global.config.css.sassConfig).on('error', sass.logError))
  .pipe(cssimport())
  .pipe(autoprefixer(global.config.css.autoprefixerConfig))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(global.config.root + global.config.dest + global.config.css.dest)))

const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

gulp.task('css:minify', () => gulp.src([`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, `!${global.config.root}${global.config.dest}${global.config.css.dest}/**/*.min.css`])
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(cleanCSS())
  .pipe(rename(global.config.css.renameConfig))
  .pipe(sourcemaps.write(global.config.root))
  .pipe(gulp.dest(global.config.root + global.config.dest + global.config.css.dest)))

const gulpSequence = require('gulp-sequence')

gulp.task('css', (callback) => {
  gulpSequence('css:sass', 'css:minify')(callback)
})

gulp.task('css:sass:deploy', () => gulp.src(`${global.config.root + global.config.css.src}*.scss`)
  .pipe(gulpStylelint(global.config.css.styleLintConfig))
  .pipe(sass(global.config.css.sassConfig).on('error', sass.logError))
  .pipe(cssimport())
  .pipe(autoprefixer(global.config.css.autoprefixerConfig))
  .pipe(gulp.dest(global.config.root + global.config.dest + global.config.css.dest)))

gulp.task('css:minify:deploy', () => gulp.src([`${global.config.root + global.config.dest + global.config.css.dest}**/*.css`, `!${global.config.root}${global.config.dest}${global.config.css.dest}/**/*.min.css`])
  .pipe(cleanCSS())
  .pipe(rename(global.config.css.renameConfig))
  .pipe(gulp.dest(global.config.root + global.config.dest + global.config.css.dest)))

gulp.task('css:deploy', (callback) => {
  gulpSequence('css:sass:deploy', 'css:minify:deploy')(callback)
})
