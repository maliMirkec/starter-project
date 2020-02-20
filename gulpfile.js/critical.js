const { src, dest } = require('gulp');
const critical = require('gulp-penthouse');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');

critical.DEBUG = process.env.NODE_ENV !== 'production';

const { helpers } = require('./helpers');

const criticalConfig = require('./.critical.json');

if (criticalConfig.configs.length > 9) {
  process.setMaxListeners(0);
}

const cssConfig = require('./.css.json');

const thisCriticalConfig = { ...criticalConfig, temp: `${helpers.parse(criticalConfig.temp)}` };

// Will extract Critical CSS
function criticalStart(cb) {
  const files = [];

  thisCriticalConfig.configs.forEach((config) => {
    const thisSettings = { ...config.settings, out: helpers.trim(`/${config.settings.out}`) };

    const thisFile = helpers.trim(`${thisCriticalConfig.temp}/${thisSettings.out}`);

    files.push(thisFile);

    if (fs.existsSync(thisFile)) {
      src(thisFile.replace('.css', '*.css'))
        .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
    } else {
      const thisConfig = {
        ...config,
        src: helpers.trim(`${helpers.dist()}/${global.config.css.dist}/${config.src}`),
        settings: thisSettings,
      };

      src(thisConfig.src)
        .pipe(critical(thisConfig.settings))
        .pipe(dest(helpers.trim(`${thisCriticalConfig.temp}`)))
        .pipe(cleanCSS())
        .pipe(rename(cssConfig.renameConfig))
        .pipe(dest(helpers.trim(`${thisCriticalConfig.temp}`)))
        .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
    }
  });

  const checkInterval = setInterval(() => {
    let checkFile = true;

    files.forEach((file) => {
      if (!fs.existsSync(file)) {
        checkFile = false;
      }
    });

    if (checkFile) {
      clearInterval(checkInterval);
      cb();
    }
  }, 250);

  return checkInterval;
}

exports.critical = {
  criticalStart,
};
