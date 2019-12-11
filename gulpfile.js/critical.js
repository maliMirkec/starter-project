const { src, dest, watch } = require('gulp');
const critical = require('gulp-penthouse');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

critical.DEBUG = process.env.NODE_ENV !== 'production';

const { helpers } = require('./helpers');

const criticalConfig = require('./.critical.json');
const cssConfig = require('./.css.json');

// Will minify Critical CSS files
function criticalMinify(cb) {
  if (global.config.css.minify) {
    src(helpers.trim(`${helpers.dist()}/${global.config.css.dist}/*.critical.css`))
      .pipe(cleanCSS())
      .pipe(rename(cssConfig.renameConfig))
      .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
  }

  cb();
}

// Will extract Critical CSS
function criticalStart(cb) {
  criticalConfig.forEach((config) => {
    const thisSettings = { ...config.settings, out: helpers.trim(`/${global.config.css.dist}/${config.settings.out}`) };

    const thisConfig = {
      ...config,
      src: helpers.trim(`${helpers.dist()}/${global.config.css.dist}/${config.src}`),
      settings: thisSettings,
    };

    src(thisConfig.src)
      .pipe(critical(thisConfig.settings))
      .pipe(dest(helpers.dist()));
  });

  cb();
}

// When CSS file is changed, it will update Critical CSS, too
function criticalListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.scss`), global.config.watchConfig, criticalStart);
}

// When Critical CSS file is changed, it will process Critical CSS file, too
function criticalListenMinify(cb) {
  watch(helpers.trim(`${helpers.dist()}/${global.config.css.dist}/*.critical.css`), global.config.watchConfig, criticalMinify, global.bs.reload);

  cb();
}

exports.critical = {
  criticalStart,
  criticalListen,
  criticalListenMinify,
};
