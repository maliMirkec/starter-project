const { src, dest, watch } = require('gulp')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const include = require('gulp-include')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const standard = require('gulp-standard')

const { helpers } = require('./helpers')

const jsConfig = require('./.js.json')

// Will process JS files
function jsStart () {
  const thisEslintConfig = Object.assign({}, jsConfig.eslintConfig, {
    configFile: helpers.parse(jsConfig.eslintConfig.configFile)
  })

  const thisIncludePaths = jsConfig.includeConfig.includePaths.map(path => helpers.parse(path))

  const thisIncludeConfig = Object.assign({}, jsConfig.includeConfig, {
    includePaths: thisIncludePaths
  })

  return src(`${helpers.source()}/${helpers.trim(global.config.js.src)}/*.js`)
    .pipe(sourcemaps.init())
    .pipe(standard())
    .pipe(standard.reporter('default', jsConfig.standardConfig))
    .pipe(eslint(thisEslintConfig))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
      console.log(`[JS] ESLint complete: ${result.filePath}`)
      console.log(`[JS] Messages: ${result.messages.length}`)
      console.warn(`[JS] Warnings: ${result.warningCount}`)
      console.error(`[JS] Errors: ${result.errorCount}`)
    }))
    .pipe(include(thisIncludeConfig))
    .pipe(babel(jsConfig.babelConfig))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.js.dist)}`))
    .pipe(uglify())
    .pipe(rename(jsConfig.renameConfig))
    .pipe(sourcemaps.write(`${helpers.source()}/${helpers.trim(global.config.js.dist)}`))
    .pipe(dest(`${helpers.dist()}/${helpers.trim(global.config.js.dist)}`))
    .pipe(global.bs.stream())
}

// When JS file is changed, it will process JS file, too
function jsListen () {
  return watch(`${helpers.source()}/${helpers.trim(global.config.js.src)}/*.js`, global.config.watchConfig, jsStart, global.bs.reload)
}

exports.js = {
  jsStart,
  jsListen
}
