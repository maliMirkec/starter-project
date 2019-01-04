const { src, watch } = require('gulp')
const jsdoc = require('gulp-jsdoc3')

const { helpers } = require('./helpers')

const jsdocConfig = require('./.jsdoc.json')

// Will process JSdoc docs
function jsdocStart () {
  const thisSrc = jsdocConfig.src.map(path => helpers.parse(path))

  const thisOpts = Object.assign({}, jsdocConfig.settings.opts, {
    destination: helpers.parse(jsdocConfig.settings.opts.destination)
  })

  const thisSettings = Object.assign({}, jsdocConfig.settings, {
    opts: thisOpts
  })

  return src(thisSrc)
    .pipe(jsdoc(thisSettings))
}

// When JS file is changed, it will process JSdoc docs, too
function jsdocListen () {
  return watch([`${helpers.source()}/${helpers.trim(global.config.js.src)}/*.js`, `${helpers.source()}/${helpers.trim(global.config.js.src)}/*.md`], global.config.watchConfig, jsdocStart, global.bs.reload)
}

exports.jsdoc = {
  jsdocStart,
  jsdocListen
}
