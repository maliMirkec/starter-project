const { src, dest, watch } = require('gulp')
const gulpif = require('gulp-if')
const babel = require('gulp-babel')
const include = require('gulp-include')
const eslint = global.config.js.lint ? require('gulp-eslint') : () => true
const standard = global.config.js.lint ? require('gulp-standard') : () => true
const sourcemaps = global.config.js.sourcemaps ? require('gulp-sourcemaps') : () => true
const uglify = global.config.js.uglify ? require('gulp-uglify') : () => true
const rename = global.config.js.uglify ? require('gulp-rename') : () => true

const { helpers } = require('./helpers')

const jsConfig = require('./.js.json')

// gulp-if fix
if (!global.config.css.sourcemaps) {
  sourcemaps.init = () => true
  sourcemaps.write = () => true
}

// Will process JS files
function jsStart () {
  const thisEslintConfig = (global.config.js.lint)
    ? Object.assign({}, jsConfig.eslintConfig, {
      configFile: helpers.parse(jsConfig.eslintConfig.configFile)
    })
    : {}

  const thisIncludePaths = jsConfig.includeConfig.includePaths.map(path => helpers.parse(path))

  const thisIncludeConfig = Object.assign({}, jsConfig.includeConfig, {
    includePaths: thisIncludePaths
  })

  if (!global.config.js.lint) {
    standard.reporter = () => true
    eslint.format = () => true
    eslint.failAfterError = () => true
    eslint.result = () => true
  }

  return src(helpers.trim(`${helpers.source()}/${global.config.js.src}/*.js`))
    .pipe(gulpif(global.config.js.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(global.config.js.lint, standard()))
    .pipe(gulpif(global.config.js.lint, standard.reporter('default', jsConfig.standardConfig)))
    .pipe(gulpif(global.config.js.lint, eslint(thisEslintConfig)))
    .pipe(gulpif(global.config.js.lint, eslint.format()))
    .pipe(gulpif(global.config.js.lint, eslint.failAfterError()))
    .pipe(gulpif(global.config.js.lint, eslint.result((result) => {
      console.log(`[JS] ESLint complete: ${result.filePath}`)
      console.log(`[JS] Messages: ${result.messages.length}`)
      console.warn(`[JS] Warnings: ${result.warningCount}`)
      console.error(`[JS] Errors: ${result.errorCount}`)
    })))
    .pipe(include(thisIncludeConfig))
    .pipe(babel(jsConfig.babelConfig))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.js.dist}`)))
    .pipe(gulpif(global.config.js.uglify, uglify()))
    .pipe(gulpif(global.config.js.uglify, rename(jsConfig.renameConfig)))
    .pipe(gulpif(global.config.js.sourcemaps, sourcemaps.write(helpers.trim(`${helpers.source()}/${global.config.js.dist}`))))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.js.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()))
}

// When JS file is changed, it will process JS file, too
function jsListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.js.src}/*.js`), global.config.watchConfig, jsStart, global.bs.reload)
}

exports.js = {
  jsStart,
  jsListen
}
