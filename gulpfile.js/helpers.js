const { src } = require('gulp')
const exit = require('gulp-exit')
const wait = require('gulp-wait')

const helpersConfig = require('./.helpers.json')

// Will remove end slash from path
const trim = (p) => {
  while (p.indexOf('..') !== -1) {
    p = p.replace('..', '')
  }

  while (p.indexOf('//') !== -1) {
    p = p.replace('//', '/')
  }

  return p
}

// Will return root folder
const proot = () => trim(`${global.config.proot}/`)

// Will return root src folder
const source = () => trim(`${global.config.proot}/${global.config.src}`)

// Will return root dest folder
const dist = () => trim(`${global.config.proot}/${global.config.dist}`)

// Will parse path
const parse = p => p.replace('helpers.proot/', proot())
  .replace('helpers.dist', dist()).replace('helpers.source', source())
  .replace('config.css.src', global.config.css.src)
  .replace('config.css.dist', global.config.css.dist)
  .replace('config.js.src', global.config.js.src)
  .replace('config.js.dist', global.config.js.dist)
  .replace('config.html.src', global.config.html.src)
  .replace('config.html.dist', global.config.html.dist)
  .replace('config.kss.dist', global.config.kss.dist)
  .replace('config.sassdoc.dist', global.config.sassdoc.dist)
  .replace('config.jsdoc.dist', global.config.jsdoc.dist)

// Will skip the task
const skip = cb => cb()

// Will kill all tasks
const kill = (cb) => {
  src(proot())
    .pipe(wait(helpersConfig.wait))
    .pipe(exit())

  cb()
}

exports.helpers = {
  proot,
  trim,
  source,
  dist,
  skip,
  kill,
  parse
}
