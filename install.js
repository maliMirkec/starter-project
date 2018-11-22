const inquirer = require('inquirer')
const pathExists = require('path-exists')
const mkdirp = require('mkdirp')
const fs = require('fs')
const ncp = require('ncp')

ncp.limit = 16

console.log('Installing Starter Package')

const questions = [
  {
    type: 'confirm',
    name: 'override',
    message: 'Do you want to override your project? Be sure to commit all changes before you proceed.',
    default: true
  },
  {
    type: 'input',
    name: 'proot',
    message: 'What is the root folder of your project?',
    default: './dest/',
    validate (value) {
      return pathExists(value).then(exists => (exists ? true : "Path doesn't exist!"))
    },
    when (answers) {
      return answers.override === true
    }
  },
  {
    type: 'input',
    name: 'src',
    message: 'Where is the folder with source code of your project (relative to default path)?',
    default: 'src',
    when (answers) {
      return answers.override === true
    }
  },
  {
    type: 'input',
    name: 'dist',
    message: 'Where do you want to store compiled code of your project (relative to default path)?',
    default: 'dist',
    when (answers) {
      return answers.override === true
    }
  },
  {
    type: 'input',
    name: 'gulp',
    message: 'Where do you want to store gulp scripts for your project (relative to default path)?',
    default: '_gulp',
    when (answers) {
      return answers.override === true
    }
  },
  {
    type: 'confirm',
    name: 'override2',
    message: 'Are you absolutely sure that you want to override your project?',
    default: true,
    when (answers) {
      return answers.override === true
    }
  }
]

function copyFile (source, target, cb) {
  let cbCalled = false

  const rd = fs.createReadStream(source)

  rd.on('error', (err) => {
    done(err)
  })

  const wr = fs.createWriteStream(target)

  wr.on('error', (err) => {
    done(err)
  })

  wr.on('close', () => {
    done()
  })

  rd.pipe(wr)

  function done (err) {
    if (!cbCalled) {
      cb(err)
      cbCalled = true
    }
  }
}

function clog (err) {
  if (err) console.error(err)
}

function ctrim (str, dot) {
  let temp = str

  while (temp.substr(-1) === '/') {
    temp = temp.slice(0, -1)
  }

  while (temp.substr(0, 1) === '/') {
    temp = temp.slice(0, 1)
  }

  if (dot) {
    while (temp.substr(0, 1) === '.') {
      temp = temp.slice(0, 1)
    }
  }

  return temp
}

const copyFiles = ['./.gitignore', './.editorconfig', './.eslintignore', './.eslintrc.json', './.htmllintrc', './.stylelintrc', './faviconData.json', './gulpfile.js']
const srcPath = 'src'
const gulpPath = '_gulp'

inquirer.prompt(questions).then((answers) => {
  if (!answers.override || !answers.override2) {
    console.log(`Commit all changes and run 'node node_modules/starter-project/postinstall.js' again.`)

    return false
  }

  const proot = ctrim(answers.proot)
  const src = ctrim(answers.src, true)
  const dist = ctrim(answers.dist, true)
  const gulp = ctrim(answers.gulp, true)

  mkdirp(`${proot}/${src}`, clog)
  mkdirp(`${proot}/${gulp}`, clog)
  ncp(srcPath, `${proot}/${src}`, clog)
  ncp(gulpPath, `${proot}/${gulp}`, clog)
  copyFiles.map(file => copyFile(file, `${proot}/${file}`, clog))

  const config = `{
  "root": "${proot}/",
  "dest": "${dist}/",
  "src": "${src}/",
  "gulp": {
    "src": "${gulp}/"
  },
  "bump": {
    "src": "package.json",
    "minorConfig": {
      "type": "minor"
    },
    "majorConfig": {
      "type": "major"
    }
  },
  "browserSync": {
    "browserSyncConfig": {
      "server": {
        "baseDir": "${proot}/${dist}/"
      }
    }
  },
  "html": {
    "run": true,
    "src": "${src}/html/**/{index,404}",
    "dest": "${dist}/",
    "watch": "${src}/html/**/*",
    "clean": "**/*.html",
    "renameConfig": {
      "extname": ".html"
    },
    "pugConfig": {
      "pretty": true,
      "basedir": "${proot}/${src}/html/"
    },
    "htmllintConfig": {
      "config": "${proot}/.htmllintrc",
      "failOnError": true
    },
    "htmlminConfig": {
      "collapseWhitespace": true
    },
    "inlineSourcePath": "${dist}"
  },
  "css": {
    "run": true,
    "src": "${src}/scss/",
    "dest": "css/",
    "clean": "css/",
    "styleLintConfig": {
      "reporters": [{
        "formatter": "string",
        "console": true
      }]
    },
    "sassConfig": {
      "includePaths": ["${proot}/node_modules/modularscale-sass/stylesheets/", "${proot}/node_modules/sass-mq/", "${proot}/node_modules/normalize.css/", "${proot}/${src}/scss/", "${proot}/${src}/scss/components"]
    },
    "autoprefixedConfig": {
      "browsers": ["last 5 versions"],
      "cascade": false
    },
    "renameConfig": {
      "suffix": ".min"
    },
    "sourcemapsConfig": {
      "run": true
    }
  },
  "penthouse": {
    "run": true,
    "src": "style.css",
    "criticalCssConfigs": [{
      "out": "${proot}/${dist}/css/style.critical.css",
      "url": "http://localhost:3000",
      "width": 1920,
      "height": 1200,
      "keepLargerMediaQueries": true,
      "strict": false,
      "blockJSRequests": false
    }]
  },
  "js": {
    "run": true,
    "src": "${src}/js/",
    "dest": "js/",
    "clean": "js/",
    "eslintConfig": {
      "configFile": "${proot}/.eslintrc.json",
      "fix": true,
      "quiet": true
    },
    "includeConfig": {
      "includePaths": [
        "${proot}/node_modules"
      ]
    },
    "babelConfig": {
      "presets": ["env"]
    },
    "standardConfig": {
      "breakOnError": false,
      "showRuleNames": true,
      "standard": {
        "globals": ["requestAnimationFrame", "sessionStorage"]
      }
    },
    "renameConfig": {
      "suffix": ".min"
    },
    "sourcemapsConfig": {
      "run": true
    }
  },
  "gfx": {
    "run": true,
    "src": "${src}/gfx/",
    "dest": "gfx/",
    "clean": "gfx/",
    "gifsicleConfig": {
      "interlaced": true
    },
    "imageminMozjpegConfig": {
      "quality": 90,
      "progressive": true
    },
    "imageminPngquantConfig": {
      "quality": 90
    },
    "svgoConfig": {
      "plugins": [{
          "cleanupAttrs": true
        },
        {
          "removeDoctype": true
        },
        {
          "removeComments": true
        },
        {
          "removeXMLProcInst": true
        },
        {
          "removeMetadata": true
        },
        {
          "removeTitle": false
        },
        {
          "removeDesc": false
        },
        {
          "removeUselessDefs": true
        },
        {
          "removeXMLNS": true
        },
        {
          "removeEditorsNSData": true
        },
        {
          "removeEmptyAttrs": true
        },
        {
          "removeHiddenElems": true
        },
        {
          "removeEditorsNSData": true
        },
        {
          "removeEmptyText": true
        },
        {
          "removeEmptyContainers": true
        },
        {
          "removeViewBox": false
        },
        {
          "cleanupEnableBackground": true
        },
        {
          "convertStyleToAttrs": true
        },
        {
          "convertColors": true
        },
        {
          "convertPathData": true
        },
        {
          "convertTransform": true
        },
        {
          "removeUnknownsAndDefaults": true
        },
        {
          "removeNonInheritableGroupAttrs": true
        },
        {
          "removeUselessStrokeAndFill": true
        },
        {
          "removeUnusedNS": true
        },
        {
          "cleanupIDs": false
        },
        {
          "cleanupNumericValues": true
        },
        {
          "cleanupListOfValues": true
        },
        {
          "moveElemsAttrsToGroup": true
        },
        {
          "moveGroupAttrsToElems": false
        },
        {
          "collapseGroups": true
        },
        {
          "removeRasterImages": true
        },
        {
          "mergePaths": true
        },
        {
          "convertShapeToPath": false
        },
        {
          "sortAttrs": true
        },
        {
          "removeDimensions": true
        },
        {
          "removeAttrs": false
        },
        {
          "removeElementsByAttr": false
        },
        {
          "addClassesToSVGElement": false
        },
        {
          "addAttributesToSVGElement": false
        },
        {
          "removeStyleElement": false
        },
        {
          "removeScriptElement": false
        },
        {
          "removeDimensions": false
        }
      ]
    }
  },
  "fonts": {
    "run": true,
    "src": "${src}/fonts/",
    "dest": "fonts/",
    "clean": "fonts/"
  },
  "favicon": {
    "run": true,
    "src": "${src}/html/partials/favicon.pug",
    "dest": "html/partials",
    "clean": "favicon/",
    "realFaviconConfig": {
      "masterPicture": "${proot}/${src}/gfx/svg/starter-project.svg",
      "dest": "${proot}/${dist}/favicon/",
      "iconsPath": "/favicon/",
      "design": {
        "ios": {
          "pictureAspect": "backgroundAndMargin",
          "backgroundColor": "#1ebada",
          "margin": "18%",
          "assets": {
            "ios6AndPriorIcons": true,
            "ios7AndLaterIcons": true,
            "precomposedIcons": true,
            "declareOnlyDefaultIcon": true
          },
          "appName": "Starter Project"
        },
        "desktopBrowser": {},
        "windows": {
          "pictureAspect": "noChange",
          "backgroundColor": "#1ebada",
          "onConflict": "override",
          "assets": {
            "windows80Ie10Tile": true,
            "windows10Ie11EdgeTiles": {
              "small": true,
              "medium": true,
              "big": true,
              "rectangle": true
            }
          },
          "appName": "Starter Project"
        },
        "androidChrome": {
          "pictureAspect": "noChange",
          "themeColor": "#1ebada",
          "manifest": {
            "name": "Starter Project",
            "display": "standalone",
            "orientation": "notSet",
            "onConflict": "override",
            "declared": true
          },
          "assets": {
            "legacyIcon": true,
            "lowResolutionIcons": false
          }
        },
        "safariPinnedTab": {
          "pictureAspect": "blackAndWhite",
          "threshold": 42.5,
          "themeColor": "#1ebada"
        }
      },
      "settings": {
        "compression": 2,
        "scalingAlgorithm": "Cubic",
        "errorOnImageTooSmall": false
      },
      "markupFile": "${proot}/faviconData.json"
    }
  },
  "gzip": {
    "run": true,
    "src": "",
    "dest": "",
    "clean": "**/*.gz",
    "gzipConfig": {}
  },
  "kill": {
    "dev": {
      "run": false
    },
    "docs": {
      "run": false
    },
    "dist": {
      "run": false
    },
    "deploy": {
      "run": true
    },
    "timeout": 20000
  },
  "kss": {
    "run": true,
    "dest": "docs/styleguide/",
    "clean": "docs/styleguide/",
    "kssConfig": {
      "title": "Starter Project",
      "source": "${proot}/${src}/scss/",
      "destination": "${proot}/${dist}/docs/styleguide/",
      "css": [
        "/css/style.css",
        "/css/foft.css"
      ],
      "js": [
        "/js/foftFontLoading.js"
      ]
    }
  },
  "sassdoc": {
    "run": true,
    "clean": "docs/sass/",
    "sassdocConfig": {
      "dest": "${proot}/${dist}/docs/sass/",
      "package": {
        "title": "Starter project",
        "name": "starter-project",
        "description": "A set of gulp tasks that helps you develop high performant websites using latest best practices.",
        "license": "MIT",
        "homepage": "https://github.com/maliMirkec/starter-project"
      },
      "autofill": true,
      "verbose": true,
      "display": {
        "access": ["public", "private"],
        "alias": true,
        "watermark": true
      },
      "groups": {
        "undefined": "Misc"
      },
      "basePath": "https://starter.silvestarbistrovic.from.hr/docs/sass/"
    }
  },
  "jsdoc": {
    "run": true,
    "src": ["${proot}/${src}/js/homepage.md", "${proot}/${src}/js/"],
    "clean": "docs/js/",
    "jsdocConfig": {
      "tags": {
        "allowUnknownTags": true
      },
      "opts": {
        "destination": "${proot}/${dist}/docs/js/"
      },
      "plugins": [
        "plugins/markdown"
      ],
      "templates": {
        "cleverLinks": true,
        "monospaceLinks": false,
        "default": {
          "outputSourceFiles": true
        },
        "path": "ink-docstrap",
        "theme": "simplex",
        "navType": "vertical",
        "linenums": true,
        "dateFormat": "MMMM Do YYYY, h:mm:ss a"
      }
    }
  }
}`

  return true
})
