const gulp = require('gulp')
const realFavicon = require('gulp-real-favicon')
const fs = require('fs')

// File where the favicon markups are stored
const FAVICON_DATA_FILE = './faviconData.json'

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon:generate', (done) => {
  realFavicon.generateFavicon({
    masterPicture: './src/gfx/svg/starter-project.svg',
    dest: './dist/favicon/',
    iconsPath: '/favicon/',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#1ebada',
        margin: '18%',
        assets: {
          ios6AndPriorIcons: true,
          ios7AndLaterIcons: true,
          precomposedIcons: true,
          declareOnlyDefaultIcon: true
        },
        appName: 'Starter Project'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#1ebada',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: true,
            medium: true,
            big: true,
            rectangle: true
          }
        },
        appName: 'Starter Project'
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#1ebada',
        manifest: {
          name: 'Starter Project',
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: true,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 42.5,
        themeColor: '#1ebada'
      }
    },
    settings: {
      compression: 2,
      scalingAlgorithm: 'Cubic',
      errorOnImageTooSmall: false
    },
    markupFile: FAVICON_DATA_FILE
  }, () => {
    done()
  })
})

const parsedFaviconData = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE))

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('favicon:inject', () => gulp.src(['./src/html/partials/favicon.pug'])
  .pipe(realFavicon.injectFaviconMarkups(parsedFaviconData.favicon.html_code))
  .pipe(gulp.dest('./src/html/partials/')))

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('favicon:update', (done) => {
  const currentVersion = parsedFaviconData.version

  realFavicon.checkForUpdates(currentVersion, (err) => {
    if (err) {
      throw err
    }
  })
})

const gulpSequence = require('gulp-sequence')

gulp.task('favicon', (callback) => {
  gulpSequence('favicon:generate', 'favicon:inject')(callback)
})
