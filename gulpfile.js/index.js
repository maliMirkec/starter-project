const { series, parallel } = require('gulp')

const { helpers } = require('./helpers')

global.config = require('./.starter-project.json')

global.config.watchConfig = require('./.watch.json')

const { sync } = require('./sync')
const { bump } = require('./bump')
const { clean } = require('./clean')
const { css } = require('./css')
const { js } = require('./js')
const { gfx } = require('./gfx')
const { fonts } = require('./fonts')
const { favicon } = require('./favicon')
const { html } = require('./html')
const { critical } = require('./critical')
const { gzip } = require('./gzip')
const { kss } = require('./kss')
const { sassdoc } = require('./sassdoc')
const { jsdoc } = require('./jsdoc')

exports.bumpPatch = bump.patch
exports.bumpMinor = bump.minor
exports.bumpMajor = bump.major
exports.clean = clean.cleanStart
exports.critical = critical.criticalStart
exports.favicon = favicon.faviconStart

exports.dev = series(
  clean.cleanStart,
  parallel(
    global.config.css.run ? css.cssStart : helpers.skip,
    global.config.js.run ? js.jsStart : helpers.skip,
    global.config.gfx.run ? gfx.gfxStart : helpers.skip,
    global.config.fonts.run ? fonts.fontsStart : helpers.skip
  ),
  global.config.html.run ? html.htmlStart : helpers.skip,
  parallel(
    sync.syncStart,
    global.config.css.run ? css.cssListen : helpers.skip,
    global.config.js.run ? js.jsListen : helpers.skip,
    global.config.gfx.run ? gfx.gfxListen : helpers.skip,
    global.config.fonts.run ? fonts.fontsListen : helpers.skip,
    global.config.html.run ? html.htmlListen : helpers.skip,
    global.config.html.run ? html.htmlListenCritical : helpers.skip
  )
)

exports.build = series(
  clean.cleanStart,
  parallel(
    global.config.favicon.run ? favicon.faviconStart : helpers.skip,
    global.config.css.run ? css.cssStart : helpers.skip,
    global.config.js.run ? js.jsStart : helpers.skip,
    global.config.gfx.run ? gfx.gfxStart : helpers.skip,
    global.config.fonts.run ? fonts.fontsStart : helpers.skip
  ),
  global.config.html.run ? html.htmlStart : helpers.skip,
  global.config.kss.run ? kss.kssStart : helpers.skip,
  global.config.sassdoc.run ? sassdoc.sassdocStart : helpers.skip,
  global.config.jsdoc.run ? jsdoc.jsdocStart : helpers.skip,
  sync.syncStart,
  parallel(
    global.config.critical.run ? critical.criticalStart : helpers.skip,
    global.config.critical.run ? critical.criticalListenMinify : helpers.skip,
    global.config.html.run ? html.htmlListenCritical : helpers.skip,
    global.config.critical.run ? helpers.kill : helpers.skip
  ),
  global.config.gzip.run ? gzip.gzipStart : helpers.skip
)

exports.default = series(
  clean.cleanStart,
  parallel(
    global.config.favicon.run ? favicon.faviconStart : helpers.skip,
    global.config.css.run ? css.cssStart : helpers.skip,
    global.config.js.run ? js.jsStart : helpers.skip,
    global.config.gfx.run ? gfx.gfxStart : helpers.skip,
    global.config.fonts.run ? fonts.fontsStart : helpers.skip
  ),
  global.config.html.run ? html.htmlStart : helpers.skip,
  global.config.kss.run ? kss.kssStart : helpers.skip,
  global.config.sassdoc.run ? sassdoc.sassdocStart : helpers.skip,
  global.config.jsdoc.run ? jsdoc.jsdocStart : helpers.skip,
  parallel(
    sync.syncStart,
    global.config.css.run ? css.cssListen : helpers.skip,
    global.config.js.run ? js.jsListen : helpers.skip,
    global.config.gfx.run ? gfx.gfxListen : helpers.skip,
    global.config.fonts.run ? fonts.fontsListen : helpers.skip,
    global.config.html.run ? html.htmlListen : helpers.skip,
    global.config.html.run ? html.htmlListenCritical : helpers.skip,
    global.config.critical.run ? critical.criticalStart : helpers.skip,
    global.config.critical.run ? critical.criticalListen : helpers.skip,
    global.config.critical.run ? critical.criticalListenMinify : helpers.skip,
    global.config.kss.run ? kss.kssListen : helpers.skip,
    global.config.sassdoc.run ? sassdoc.sassdocListen : helpers.skip,
    global.config.jsdoc.run ? jsdoc.jsdocListen : helpers.skip
  )
)
