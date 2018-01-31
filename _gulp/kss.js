const gulp = require('gulp')
const kss = require('kss')

gulp.task('kss', () => kss(global.config.kss.kssConfig))
