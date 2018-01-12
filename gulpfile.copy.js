const gulp = require('gulp')
const requireDir = require('require-dir')
const config = require('./node_modules/starter-project/config.json')

requireDir(config.root + config.gulp.src)
