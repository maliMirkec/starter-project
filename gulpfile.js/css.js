const { src, dest, watch } = require('gulp')
const gulpStylelint = require('gulp-stylelint')
const sass = require('gulp-sass')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

const { helpers } = require('./helpers')

const cssConfig = require('./.css.json')

// Will process Sass files
function cssStart () {
  const thisIncludePaths = cssConfig.sassConfig.includePaths.map(path => helpers.parse(path))

  const thisSassConfig = Object.assign({}, cssConfig.sassConfig, {
    includePaths: thisIncludePaths
  })

  return src(`${helpers.source()}/${helpers.trim(global.config.css.src)}/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(gulpStylelint(cssConfig.styleLintConfig))
    .pipe(sass(thisSassConfig).on('error', sass.logError))
    .pipe(cssimport())
    .pipe(autoprefixer(cssConfig.autoprefixerConfig))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(cleanCSS())
    .pipe(rename(cssConfig.renameConfig))
    .pipe(sourcemaps.write(`${helpers.source()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(global.bs.stream())
}

// Will process non Critical Sass files
function cssStartListen () {
  const thisIncludePaths = cssConfig.sassConfig.includePaths.map(path => helpers.parse(path))

  const thisSassConfig = Object.assign({}, cssConfig.sassConfig, {
    includePaths: thisIncludePaths
  })

  return src([`${helpers.source()}/${helpers.trim(global.config.css.src)}/*.scss`, `!${helpers.source()}/${helpers.trim(global.config.css.src)}/*.critical.scss`])
    .pipe(sourcemaps.init())
    .pipe(gulpStylelint(cssConfig.styleLintConfig))
    .pipe(sass(thisSassConfig).on('error', sass.logError))
    .pipe(cssimport())
    .pipe(autoprefixer(cssConfig.autoprefixerConfig))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(cleanCSS())
    .pipe(rename(cssConfig.renameConfig))
    .pipe(sourcemaps.write(`${helpers.source()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}`))
    .pipe(global.bs.stream())
}

// When Sass file is changed, it will process Sass file, too
function cssListen () {
  return watch(`${helpers.source()}/${helpers.trim(global.config.css.src)}/**/*.scss`, global.config.watchConfig, cssStartListen, global.bs.reload)
}

exports.css = {
  cssStart,
  cssListen
}
