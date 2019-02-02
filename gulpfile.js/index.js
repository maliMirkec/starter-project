const { series, parallel } = require('gulp')

const { helpers } = require('./helpers')

global.config = require('./.starter-project.json')

global.config.watchConfig = require('./.watch.json')

const { sync } = require('./sync')
const { bump } = require('./bump')
const { clean } = require('./clean')
const { css } = global.config.css.run ? require('./css') : false
const { js } = global.config.js.run ? require('./js') : false
const { gfx } = global.config.gfx.run ? require('./gfx') : false
const { fonts } = global.config.fonts.run ? require('./fonts') : false
const { favicon } = global.config.favicon.run ? require('./favicon') : false
const { html } = global.config.html.run ? require('./html') : false
const { critical } = global.config.critical.run ? require('./critical') : false
const { gzip } = global.config.gzip.run ? require('./gzip') : false
const { kss } = global.config.kss.run ? require('./kss') : false
const { sassdoc } = global.config.sassdoc.run ? require('./sassdoc') : false
const { jsdoc } = global.config.jsdoc.run ? require('./jsdoc') : false

if(global.config.bump.run) {
  exports.bumpPatch = bump.patch
  exports.bumpMinor = bump.minor
  exports.bumpPrerelease = bump.prerelease
}

exports.clean = clean.cleanStart

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
    global.config.critical.run && global.config.critical.minify
      ? critical.criticalListenMinify
      : helpers.skip,
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
    global.config.critical.run && global.config.critical.minify
      ? critical.criticalListenMinify
      : helpers.skip,
    global.config.kss.run ? kss.kssListen : helpers.skip,
    global.config.sassdoc.run ? sassdoc.sassdocListen : helpers.skip,
    global.config.jsdoc.run ? jsdoc.jsdocListen : helpers.skip
  )
)
