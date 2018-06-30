const gulp = require('gulp')
const del = require('del')

const delSrc = []

Object.keys(global.config).forEach((key) => {
  if (global.config[key].run && global.config[key].clean) {
    if (Array.isArray(global.config[key].clean)) {
      global.config[key].clean.forEach((aKey) => {
        delSrc.push(global.config.root + global.config.dest + aKey)
      })
    } else {
      delSrc.push(global.config.root + global.config.dest + global.config[key].clean)
    }
  }
})

gulp.task('clean', () => del(delSrc))
