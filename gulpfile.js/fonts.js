const { src, dest, watch } = require('gulp');

const { helpers } = require('./helpers');

// Will process font files, too
function fontsStart() {
  return src(helpers.trim(`${helpers.source()}/${global.config.fonts.src}/**/*`))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.fonts.dist}`)));
}

// When font is changed, it will process font file, too
function fontsListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.fonts.src}/**/*`), global.config.watchConfig, fontsStart, global.bs.reload);
}

exports.fonts = {
  fontsStart,
  fontsListen,
};
