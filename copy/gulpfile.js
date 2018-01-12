const requireDir = require('require-dir')
const config = require('./config.json')

requireDir(config.root + config.gulp.src)
