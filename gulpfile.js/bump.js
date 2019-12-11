const { src, dest } = require('gulp');
const bump = require('gulp-bump');

const { helpers } = require('./helpers');

const bumpConfig = require('./.bump.json');

// Will patch the version
function patch(cb) {
  src(bumpConfig.src.map((path) => helpers.parse(path)))
    .pipe(bump())
    .pipe(dest(global.config.proot));

  cb();
}

// Will update minor version
function minor(cb) {
  src(bumpConfig.src.map((path) => helpers.parse(path)))
    .pipe(bump({
      type: 'minor',
    }))
    .pipe(dest(global.config.proot));

  cb();
}

// Will update major version
function major(cb) {
  src(bumpConfig.src.map((path) => helpers.parse(path)))
    .pipe(bump({
      type: 'major',
    }))
    .pipe(dest(global.config.proot));

  cb();
}

// Will update prerelease version
function prerelease(cb) {
  src(bumpConfig.src.map((path) => helpers.parse(path)))
    .pipe(bump({
      type: 'prerelease',
    }))
    .pipe(dest(global.config.proot));

  cb();
}

exports.bump = {
  patch,
  minor,
  major,
  prerelease,
};
