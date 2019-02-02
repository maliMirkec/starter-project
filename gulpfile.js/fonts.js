const { src, dest, watch } = require('gulp')

const { helpers } = require('./helpers')

// Will process font files, too
function fontsStart () {
  return src(`${helpers.source()}/${helpers.trim(global.config.fonts.src)}/**/*`)
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.fonts.dist)}`))
}

// When font is changed, it will process font file, too
function fontsListen () {
  return watch(helpers.path(`${helpers.source()}/${helpers.trim(global.config.fonts.src)}/**/*`), global.config.watchConfig, fontsStart, global.bs.reload)
}

exports.fonts = {
  fontsStart,
  fontsListen
}
