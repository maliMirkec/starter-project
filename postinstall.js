const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const ncp = require('ncp')
const chalk = require('chalk')

ncp.limit = 16

const helpers = ['gulpfile.js', 'src', '.editorconfig', '.htmllintrc', '.stylelintrc', '.eslintignore', '.eslintrc.json']
const destinationPath = './'

const message = (text, error = true) => (text ? console.log(chalk.hex(error ? '#e01258' : '#12e09f')(text)) : false)

const directoryExists = (dirPath) => {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()
  } catch (err) {
    message(err)

    return false
  }
}

const makeDirectory = (dirPath) => {
  try {
    return mkdirp(dirPath, message)
  } catch (err) {
    message(err)

    return false
  }
}

const fileExists = (filePath) => {
  try {
    return fs.existsSync(filePath)
  } catch (err) {
    log(err)

    return false
  }
}

const copyFile = (filePath, destPath = './', destFile) => {
  try {
    return ncp(path.join(__dirname, filePath), `${destPath + destFile}`, { clobber: true }, message)
  } catch (err) {
    message(err)

    return false
  }
}

for (let i = 0; i < helpers.length; i += 1) {
  if (!directoryExists(destinationPath)) {
    makeDirectory(destinationPath)
  }

  copyFile(helpers[i], destinationPath, helpers[i])
}
