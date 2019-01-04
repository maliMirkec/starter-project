const { src, dest, watch } = require('gulp')
const realFavicon = require('gulp-real-favicon')
const fs = require('fs')

const { helpers } = require('./helpers')

const faviconConfig = require('./.favicon.json')
const faviconDataConfig = require('./.favicon-data.json')

// Will process favicon file
function faviconStart (cb) {
  const thisFaviconDataConfig = Object.assign({}, faviconDataConfig, {
    masterPicture: `${helpers.parse(faviconDataConfig.masterPicture)}`,
    dest: `${helpers.parse(faviconDataConfig.dest)}`,
    iconsPath: `${helpers.parse(faviconDataConfig.iconsPath)}`,
    markupFile: `${helpers.parse(faviconDataConfig.markupFile)}`
  })

  realFavicon.generateFavicon(thisFaviconDataConfig, () => {
    if (fs.existsSync(thisFaviconDataConfig.markupFile)) {
      const parsedFaviconFile = JSON.parse(fs.readFileSync(thisFaviconDataConfig.markupFile))

      src(helpers.parse(faviconConfig.src))
        .pipe(realFavicon.injectFaviconMarkups(parsedFaviconFile.favicon.html_code))
        .pipe(dest(helpers.parse(faviconConfig.dest)))
    }

    cb()
  })
}

// When favicon file change, it will process favicon file, too
function faviconListen () {
  return watch(`${helpers.source()}/${helpers.trim(global.config.favicon.src)}/**/*`, global.config.watchConfig, faviconStart, global.bs.reload)
}

exports.favicon = {
  faviconStart,
  faviconListen
}
