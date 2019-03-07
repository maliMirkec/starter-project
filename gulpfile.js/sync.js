const { helpers } = require('./helpers')

const syncConfig = require('./.sync.json')

// Start static server
function syncStart (cb) {
  if (global.config.sync.run) {
    let thisConfig = {}

    if (syncConfig.proxy) {
      thisConfig = Object.assign({}, syncConfig, {
        proxy: syncConfig.proxy
      })
    } else {
      const thisServer = syncConfig.server.baseDir
        ? helpers.parse(syncConfig.server.baseDir)
        : Object.assign({}, syncConfig.server, { baseDir: helpers.dist() })

      thisConfig = Object.assign({}, syncConfig, {
        server: thisServer
      })
    }

    global.bs.init(thisConfig)
  }

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
