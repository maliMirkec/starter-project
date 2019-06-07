const { src, dest, watch } = require('gulp')
const realFavicon = require('gulp-real-favicon')
const fs = require('fs')

const { helpers } = require('./helpers')

const faviconConfig = require('./.favicon.json')
const faviconDataConfig = require('./.favicon-data.json')

const thisFaviconDataConfig = Object.assign({}, faviconDataConfig, {
  masterPicture: `${helpers.parse(faviconDataConfig.masterPicture)}`,
  temp: `${helpers.parse(faviconDataConfig.temp)}`,
  dest: `${helpers.parse(faviconDataConfig.dest)}`,
  iconsPath: `${helpers.parse(faviconDataConfig.iconsPath)}`,
  markupFile: `${helpers.parse(faviconDataConfig.markupFile)}`
})

// Will process favicon file
function faviconStart (cb) {
  if (fs.existsSync(helpers.trim(`${thisFaviconDataConfig.temp}/favicon.ico`))) {
    src(helpers.trim(`${thisFaviconDataConfig.temp}/*`))
      .pipe(dest(helpers.trim(`${thisFaviconDataConfig.dest}`)))

    cb()
  } else {
    realFavicon.generateFavicon(thisFaviconDataConfig, () => {
      if (fs.existsSync(thisFaviconDataConfig.markupFile)) {
        src(helpers.trim(`${thisFaviconDataConfig.dest}/*`))
          .pipe(dest(helpers.trim(`${thisFaviconDataConfig.temp}`)))

        const parsedFaviconFile = JSON.parse(fs.readFileSync(thisFaviconDataConfig.markupFile))

        src(helpers.parse(faviconConfig.src))
          .pipe(realFavicon.injectFaviconMarkups(parsedFaviconFile.favicon.html_code))
          .pipe(dest(helpers.parse(faviconConfig.dest)))
      }

      cb()
    })
  }
}

// When favicon file change, it will process favicon file, too
function faviconListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.favicon.src}/**/*`), global.config.watchConfig, faviconStart, global.bs.reload)
}

exports.favicon = {
  faviconStart,
  faviconListen
}
