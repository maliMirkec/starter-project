const gulp = require('gulp')
const kss = require('kss')
const config = require('../config.json')

gulp.task('kss', () => kss(config.kss.kssConfig))
