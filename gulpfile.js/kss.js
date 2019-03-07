const { watch } = require('gulp')
const kss = require('kss')

const { helpers } = require('./helpers')

const kssConfig = require('./.kss.json')

// Will process KSS docs
function kssStart () {
  const thisCss = kssConfig.css.map(path => helpers.parse(path))
  const thisJs = kssConfig.js.map(path => helpers.parse(path))

  const thisKssConfig = Object.assign({}, kssConfig, {
    source: helpers.parse(kssConfig.source),
    destination: helpers.parse(kssConfig.destination),
    css: thisCss,
    js: thisJs
  })

  return kss(thisKssConfig)
}

// When Sass file is changed, it will process KSS docs, too
function kssListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.scss`), global.config.watchConfig, kssStart, global.bs.reload)
}

exports.kss = {
  kssStart,
  kssListen
}
