global.bs = require('browser-sync').create()

const { helpers } = require('./helpers')

const syncConfig = require('./.sync.json')

// Start static server
function syncStart (cb) {
  const thisServer = syncConfig.server.baseDir
    ? syncConfig.server
    : Object.assign({}, syncConfig.server, { baseDir: helpers.dist() })

  const thisConfig = Object.assign({}, syncConfig, {
    server: thisServer
  })

  global.bs.init(thisConfig)

  cb()
}

// Stop static server
function syncStop (cb) {
  global.bs.exit()

  cb()
}

exports.sync = {
  syncStart,
  syncStop
}
