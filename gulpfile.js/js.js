const { src, dest, watch } = require('gulp');
const gulpif = require('gulp-if');
const eslint = global.config.js.lint ? require('gulp-eslint') : () => true;
const sourcemaps = global.config.js.sourcemaps ? require('gulp-sourcemaps') : () => true;
const rename = global.config.js.uglify ? require('gulp-rename') : () => true;
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');

const { helpers } = require('./helpers');

const jsConfig = require('./.js.json');
const webpackConfig = require('./webpack.js');

// gulp-if fix
if (!global.config.css.sourcemaps) {
  sourcemaps.init = () => true;
  sourcemaps.write = () => true;
}

const thisEslintConfig = (global.config.js.lint)
  ? ({ ...jsConfig.eslintConfig, configFile: helpers.parse(jsConfig.eslintConfig.configFile) })
  : {};

if (!global.config.js.lint) {
  eslint.format = () => true;
  eslint.failAfterError = () => true;
  eslint.result = () => true;
}

webpackConfig.devtool = (global.config.js.sourcemaps) ? 'sourcemaps' : '';

function jsStartDev(cb) {
  webpackConfig.mode = 'development';

  jsStart();

  cb();
}

function jsStartProd(cb) {
  webpackConfig.mode = (global.config.js.uglify) ? 'production' : 'development';

  jsStart();

  cb();
}

// Will process JS files
function jsStart() {
  return src(helpers.trim(`${helpers.source()}/${global.config.js.src}/*.js`))
    .pipe(gulpif(global.config.js.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(global.config.js.lint, eslint(thisEslintConfig)))
    .pipe(gulpif(global.config.js.lint, eslint.format()))
    .pipe(gulpif(global.config.js.lint, eslint.failAfterError()))
    .pipe(gulpif(global.config.js.lint, eslint.result((result) => {
      console.log(`[JS] ESLint complete: ${result.filePath}`);
      console.log(`[JS] Messages: ${result.messages.length}`);
      console.warn(`[JS] Warnings: ${result.warningCount}`);
      console.error(`[JS] Errors: ${result.errorCount}`);
    })))
    .pipe(
      gulpWebpack(webpackConfig),
      webpack,
    )
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.js.dist}`)))
    .pipe(gulpif(global.config.js.uglify, rename(jsConfig.renameConfig)))
    .pipe(gulpif(global.config.js.sourcemaps, sourcemaps.write(helpers.trim(`${helpers.source()}/${global.config.js.dist}`))))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.js.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()));
}

// When JS file is changed, it will process JS file, too
function jsListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.js.src}/*.js`), global.config.watchConfig, jsStart, global.bs.reload);
}

exports.js = {
  jsStart,
  jsStartDev,
  jsStartProd,
  jsListen,
};
