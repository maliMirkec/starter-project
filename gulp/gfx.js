const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

gulp.task('gfx', () =>
  gulp.src('./src/gfx/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imageminMozjpeg({
        quality: 90,
        progressive: true
      }),
      imageminPngquant({
        quality: 90
      }),
      imagemin.svgo({
        plugins: [
          { cleanupAttrs: true },
          { removeDoctype: true },
          { removeComments: true },
          { removeXMLProcInst: true },
          { removeMetadata: true },
          { removeTitle: false },
          { removeDesc: false },
          { removeUselessDefs: true },
          { removeXMLNS: true },
          { removeEditorsNSData: true },
          { removeEmptyAttrs: true },
          { removeHiddenElems: true },
          { removeEditorsNSData: true },
          { removeEmptyText: true },
          { removeEmptyContainers: true },
          { removeViewBox: false },
          { cleanupEnableBackground: true },
          { convertStyleToAttrs: true },
          { convertColors: true },
          { convertPathData: true },
          { convertTransform: true },
          { removeUnknownsAndDefaults: true },
          { removeNonInheritableGroupAttrs: true },
          { removeUselessStrokeAndFill: true },
          { removeUnusedNS: true },
          { cleanupIDs: false },
          { cleanupNumericValues: true },
          { cleanupListOfValues: true },
          { moveElemsAttrsToGroup: true },
          { moveGroupAttrsToElems: false },
          { collapseGroups: true },
          { removeRasterImages: true },
          { mergePaths: true },
          { convertShapeToPath: false },
          { sortAttrs: true },
          { removeDimensions: true },
          { removeAttrs: false },
          { removeElementsByAttr: false },
          { addClassesToSVGElement: false },
          { addAttributesToSVGElement: false },
          { removeStyleElement: false },
          { removeScriptElement: false },
          { removeDimensions: false }
        ]
      })
    ]))
    .pipe(gulp.dest('./dist/gfx/')))
