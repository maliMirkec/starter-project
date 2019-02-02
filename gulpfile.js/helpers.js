const { src } = require('gulp')
const exit = require('gulp-exit')
const wait = require('gulp-wait')

const helpersConfig = require('./.helpers.json')

// Will remove '..' from dir path
const path = p => p.split('/').filter((e, i, a) => (e !== '..' && a[i + 1] !== '..') || i + 1 === a.length).join('/')

// Will remove end slash from dir path
const trim = dir => (dir.substr(-1) !== '/' ? dir : dir.substr(0, dir.length - 1))

// Will return root folder
const proot = () => `${trim(global.config.proot)}/`

// Will return root src folder
const source = () => `${trim(global.config.proot)}/${trim(global.config.src)}`

// Will return root dest folder
const dist = () => `${trim(global.config.proot)}/${trim(global.config.dist)}`

// Will parse path
const parse = p => p.replace('helpers.proot/', proot())
  .replace('helpers.dist', dist()).replace('helpers.source', source())
  .replace('config.css.src', global.config.css.src)
  .replace('config.css.dist', global.config.css.dist)
  .replace('config.js.src', global.config.js.src)
  .replace('config.js.dist', global.config.js.dist)
  .replace('config.html.src', global.config.html.src)
  .replace('config.html.dist', global.config.html.dist)

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
  path,
  source,
  dist,
  skip,
  kill,
  parse
}
