const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const config = require('../config.json')

gulp.task('gfx', () =>
  gulp.src(`${config.root + config.src + config.gfx.src}**/*`)
    .pipe(imagemin([
      imagemin.gifsicle(config.gfx.gifsicleConfig),
      imageminMozjpeg(config.gfx.imageminMozjpegConfig),
      imageminPngquant(config.gfximageminPngquantConfig),
      imagemin.svgo(config.gfx.svgoConfig)
    ]))
    .pipe(gulp.dest(config.root + config.dest + config.gfx.dest)))
