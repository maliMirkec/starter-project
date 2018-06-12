const gulp = require('gulp')
const realFavicon = require('gulp-real-favicon')
const fs = require('fs')
const runSequence = require('run-sequence')

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon:generate', done =>
  realFavicon.generateFavicon(global.config.favicon.realFaviconConfig, () => done()))

if (global.config.favicon.run) {
  const parsedFaviconFile = fs.readFileSync(global.config.favicon.realFaviconConfig.markupFile)
  const parsedFaviconData = JSON.parse(parsedFaviconFile)

  // Inject the favicon markups in your HTML pages. You should run
  // this task whenever you modify a page. You can keep this task
  // as is or refactor your existing HTML pipeline.
  gulp.task('favicon:inject', () => gulp.src([global.config.root + global.config.favicon.src])
    .pipe(realFavicon.injectFaviconMarkups(parsedFaviconData.favicon.html_code))
    .pipe(gulp.dest(global.config.root + global.config.favicon.dest)))

  // Check for updates on RealFaviconGenerator (think: Apple has just
  // released a new Touch icon along with the latest version of iOS).
  // Run this task from time to time. Ideally, make it part of your
  // continuous integration system.
  gulp.task('favicon:update', done => realFavicon.checkForUpdates(parsedFaviconData.version))

  gulp.task('favicon', callback => runSequence('favicon:generate', 'favicon:inject', callback))
}
