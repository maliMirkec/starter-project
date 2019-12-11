// const gulp = require('gulp')
const del = require('del');

const { helpers } = require('./helpers');

// Will delete dist folder
function cleanStart() {
  return del(helpers.dist());
}

exports.clean = {
  cleanStart,
};
