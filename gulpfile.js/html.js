const { src, dest, watch } = require('gulp')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const path = require('path')
const pug = global.config.html.pug ? require('gulp-pug') : () => true
const htmlmin = global.config.html.minify ? require('gulp-htmlmin') : () => true
const htmllint = global.config.html.lint ? require('gulp-htmllint') : () => true
const inlineSource = global.config.html.inline ? require('gulp-inline-source') : () => true

const { helpers } = require('./helpers')
const htmlConfig = require('./.html.json')

// Will process Pug files
function htmlStart () {
  let thisPugConfig = {}

  if (global.config.html.pug) {
    thisPugConfig = htmlConfig.pugConfig.basedir
      ? htmlConfig.pugConfig
      : Object.assign({}, htmlConfig.pugConfig, { basedir: `${helpers.source()}/${helpers.trim(global.config.html.src)}/` })
  }

  let thisHtmllintConfig = {}

  if (global.config.html.lint) {
    thisHtmllintConfig = htmlConfig.htmllintConfig.config
      ? htmlConfig.htmllintConfig.config
      : Object.assign({}, htmlConfig.htmllintConfig, { config: `${helpers.proot()}.htmllintrc` })
  }

  let thisInlineConfig = {}

  if (global.config.html.inline) {
    thisInlineConfig = htmlConfig.inlineConfig.rootpath
      ? htmlConfig.inlineConfig
      : Object.assign({}, htmlConfig.inlineConfig, { rootpath: path.resolve(helpers.dist()) })
  }

  const htmlSrc = global.config.html.pug
    ? [`${helpers.source()}/${helpers.trim(global.config.html.src)}/**/*.pug`, `!${helpers.source()}/${helpers.trim(global.config.html.src)}/_**/*.pug`, `!${helpers.source()}/${helpers.trim(global.config.html.src)}/**/_**/*.pug`]
    : `${helpers.source()}/${helpers.trim(global.config.html.src)}/**/*.html`

  return src(htmlSrc)
    .pipe(gulpif(global.config.html.pug, pug(thisPugConfig)))
    .pipe(gulpif(global.config.html.lint, htmllint(thisHtmllintConfig)))
    .pipe(gulpif(global.config.html.inline, inlineSource(thisInlineConfig)))
    .pipe(gulpif(global.config.html.minify, htmlmin(htmlConfig.htmlminConfig)))
    .pipe(rename(htmlConfig.renameConfig))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.html.dist)}`))
    .pipe(global.bs.stream())
}

// When Pug file is changed, it will process Pug file, too
function htmlListen () {
  return watch(helpers.path(`${helpers.source()}/${helpers.trim(global.config.html.src)}/**/*.pug`), global.config.watchConfig, htmlStart)
}

// When Critical CSS file is changed, it will process HTML, too
function htmlListenCritical (cb) {
  watch(helpers.path(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}/*.critical.min.css`), global.config.watchConfig, htmlStart)

  cb()
}

exports.html = {
  htmlStart,
  htmlListen,
  htmlListenCritical
}
