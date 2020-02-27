const { src, watch } = require('gulp');
const jsdoc = require('gulp-jsdoc3');

const { helpers } = require('./helpers');

const jsdocConfig = require('./.jsdoc.json');

const thisSrc = jsdocConfig.src.map((path) => helpers.parse(path));

const thisOpts = {
  ...jsdocConfig.settings.opts,
  destination: helpers.parse(jsdocConfig.settings.opts.destination),
}

const thisSettings = {
  ...jsdocConfig.settings,
  opts: thisOpts,
}

// Will process JSdoc docs
function jsdocStart() {
  return src(thisSrc)
    .pipe(jsdoc(thisSettings));
}

// When JS file is changed, it will process JSdoc docs, too
function jsdocListen() {
  return watch([helpers.trim(`${helpers.source()}/${global.config.js.src}/*.js`), helpers.trim(`${helpers.source()}/${global.config.js.src}/*.md`)], global.config.watchConfig, jsdocStart, global.bs.reload);
}

exports.jsdoc = {
  jsdocStart,
  jsdocListen,
};
