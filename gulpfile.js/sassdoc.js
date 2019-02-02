const { src, watch } = require('gulp')
const sassdoc = require('sassdoc')

const { helpers } = require('./helpers')

const sassdocConfig = require('./.sassdoc.json')

// Will process SassDoc docs
function sassdocStart () {
  const thisSassdocConfig = Object.assign({}, sassdocConfig, {
    package: `${helpers.proot()}${sassdocConfig.package}`,
    dest: `${helpers.dist()}${sassdocConfig.dest}`
  })

  return src(`${helpers.source()}/${helpers.trim(global.config.css.src)}/**/*.scss`)
    .pipe(sassdoc(thisSassdocConfig))
}

// When Sass file is changed, it will process SassDoc docs, too
function sassdocListen () {
  return watch(helpers.path(`${helpers.source()}/${helpers.trim(global.config.css.src)}/**/*.scss`), global.config.watchConfig, sassdocStart, global.bs.reload)
}

exports.sassdoc = {
  sassdocStart,
  sassdocListen
}
