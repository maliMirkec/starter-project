const { src, dest, watch } = require('gulp')
const gulpif = require('gulp-if')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const htmllint = require('gulp-htmllint')
const rename = require('gulp-rename')
const inlineSource = require('gulp-inline-source')
const path = require('path')

const { helpers } = require('./helpers')
const htmlConfig = require('./.html.json')

// Will process Pug files
function htmlStart () {
  let thisPugConfig = false

  if (global.config.html.pug) {
    thisPugConfig = htmlConfig.pugConfig.basedir
      ? htmlConfig.pugConfig
      : Object.assign({}, htmlConfig.pugConfig, { basedir: `${helpers.source()}/${helpers.trim(global.config.html.src)}/` })
  }

  const thisHtmllintConfig = htmlConfig.htmllintConfig.config
    ? htmlConfig.htmllintConfig.config
    : Object.assign({}, htmlConfig.htmllintConfig, { config: `${helpers.proot()}.htmllintrc` })

  const thisInlineConfig = htmlConfig.inlineConfig.rootpath
    ? htmlConfig.inlineConfig
    : Object.assign({}, htmlConfig.inlineConfig, { rootpath: path.resolve(helpers.dist()) })

  return src([`${helpers.source()}/${helpers.trim(global.config.html.src)}/**/*.pug`, `!${helpers.source()}/${helpers.trim(global.config.html.src)}/_**/*.pug`, `!${helpers.source()}/${helpers.trim(global.config.html.src)}/**/_**/*.pug`])
    .pipe(gulpif(global.config.html.pug, pug(thisPugConfig)))
    .pipe(htmllint(thisHtmllintConfig))
    .pipe(inlineSource(thisInlineConfig))
    .pipe(htmlmin(htmlConfig.htmlminConfig))
    .pipe(rename(htmlConfig.renameConfig))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.html.dist)}`))
    .pipe(global.bs.stream())
}

// When Pug file is changed, it will process Pug file, too
function htmlListen () {
  return watch(`${helpers.source()}/${helpers.trim(global.config.html.src)}/**/*.pug`, global.config.watchConfig, htmlStart)
}

// When Critical CSS file is changed, it will process HTML, too
function htmlListenCritical (cb) {
  watch(`${helpers.dist()}/${helpers.trim(global.config.css.dist)}/*.critical.min.css`, global.config.watchConfig, htmlStart)

  cb()
}

exports.html = {
  htmlStart,
  htmlListen,
  htmlListenCritical
}
