const { src, dest } = require('gulp')
const bump = require('gulp-bump')

const { helpers } = require('./helpers')

// Will patch the version
function patch (cb) {
  src([`${helpers.trim(global.config.proot)}/package.json`])
    .pipe(bump())
    .pipe(dest(global.config.proot))

  cb()
}

// Will update minor version
function minor (cb) {
  src([`${helpers.trim(global.config.proot)}/package.json`])
    .pipe(bump({
      type: 'minor'
    }))
    .pipe(dest(global.config.proot))

  cb()
}

// Will update major version
function major (cb) {
  src([`${helpers.trim(global.config.proot)}/package.json`])
    .pipe(bump({
      type: 'major'
    }))
    .pipe(dest(global.config.proot))

  cb()
}

exports.bump = {
  patch,
  minor,
  major
}
