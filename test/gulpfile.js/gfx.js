const { src, dest, watch } = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const { helpers } = require('./helpers')

const gfxConfig = require('./.gfx.json')

// Will process image files
function gfxStart () {
  return src(helpers.trim(`${helpers.source()}/${global.config.gfx.src}/**/*`))
    .pipe(imagemin([
      imagemin.gifsicle(gfxConfig.gifConfig),
      imageminMozjpeg(gfxConfig.jpegConfig),
      imageminPngquant(gfxConfig.pngConfig),
      imagemin.svgo(gfxConfig.svgConfig)
    ]))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.gfx.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()))
}

// When image is changed, it will process image file, too
function gfxListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.gfx.src}/**/*`), global.config.watchConfig, gfxStart, global.bs.reload)
}

exports.gfx = {
  gfxStart,
  gfxListen
}
