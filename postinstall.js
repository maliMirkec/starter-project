const pathExists = require('path-exists')
const ncp = require('ncp')

ncp.limit = 16

const configCheck1 = '../../config.json'
const configCheck2 = '../../gulpfile.js'
const configSrc = 'copy'
const configDest = '../../'

pathExists(configCheck1).then((exists1) => {
  if (!exists1) {
    pathExists(configCheck2).then((exists2) => {
      if (!exists2) {
        ncp(configSrc, configDest, (err) => {
          if (err) {
            return false
          }
        })
      }
    })
  }

  return true
})

const srcCheck1 = '../../new_src'
const srcCheck2 = '../../src'
const srcSrc = 'src'
const srcDest = '../../new_src/'

pathExists(srcCheck1).then((exists1) => {
  if (!exists1) {
    pathExists(srcCheck2).then((exists2) => {
      if (!exists2) {
        ncp(srcSrc, srcDest, (err) => {
          if (err) {
            return false
          }
        })
      }
    })
  }

  return true
})

const tasksCheck = '../../_gulp'
const tasksSrc = '_gulp'
const tasksDest = '../../_gulp'

pathExists(tasksCheck).then((exists1) => {
  if (!exists1) {
    ncp(tasksSrc, tasksDest, (err) => {
      if (err) {
        return false
      }
    })
  }

  return true
})
