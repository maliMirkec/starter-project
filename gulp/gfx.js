const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

gulp.task('gfx', () =>
  gulp.src(`${global.config.root + global.config.src + global.config.gfx.src}**/*`)
    .pipe(imagemin([
      imagemin.gifsicle(global.config.gfx.gifsicleConfig),
      imageminMozjpeg(global.config.gfx.imageminMozjpegConfig),
      imageminPngquant(global.config.gfximageminPngquantConfig),
      imagemin.svgo(global.config.gfx.svgoConfig)
    ]))
    .pipe(gulp.dest(global.config.root + global.config.dest + global.config.gfx.dest)))
