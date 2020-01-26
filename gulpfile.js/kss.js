const { watch } = require('gulp');
const kss = require('kss');

const { helpers } = require('./helpers');

const kssConfig = require('./.kss.json');

const ext = global.config.css.sass ? 'scss' : 'css';

const thisCss = kssConfig.css.map((path) => helpers.parse(path));
const thisJs = kssConfig.js.map((path) => helpers.parse(path));

const thisKssConfig = {
  ...kssConfig,
  source: helpers.parse(kssConfig.source),
  destination: helpers.parse(kssConfig.destination),
  css: thisCss,
  js: thisJs,
};

// Will process KSS docs
function kssStart() {
  return kss(thisKssConfig);
}

// When Sass file is changed, it will process KSS docs, too
function kssListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.${ext}`), global.config.watchConfig, kssStart, global.bs.reload);
}

exports.kss = {
  kssStart,
  kssListen,
};
