(function (root, factory) {
  const pluginName = 'Classily'

  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName))
  } else if (typeof exports === 'object') {
    module.exports = factory(pluginName)
  } else {
    window[pluginName] = factory(pluginName)
  }
}(this, (pluginName) => {
  const defaults = {
    selector: '.js-classily'
  }
  /**
   * Merge defaults with user options
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   */
  const extend = function (target, options) {
    const extended = {}

    Object.keys(defaults).forEach((prop) => {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop]
      }
    })

    Object.keys(options).forEach((prop) => {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop]
      }
    })

    return extended
  }

  /**
   * Helper Functions
   @private
   */
  const doToggle = function (cur, sel, cl) {
    const $tar = Array.prototype.slice.call(document.querySelectorAll(sel))

    if (sel.indexOf('this') !== -1) {
      $tar.push(cur)
    }

    if ($tar) {
      for (let i = 0; i < $tar.length; i += 1) {
        $tar[i].classList.toggle(cl.trim())
      }
    }
  }

  /**
   * Helper Functions
   @private
   */
  const toggleClass = function (e) {
    // Helper function, not directly acessible by instance object
    if (e.currentTarget.getAttribute('data-prevent') === 'default') {
      e.preventDefault()
    }

    const selectors = e.currentTarget.getAttribute('data-target').split(',')
    const classes = e.currentTarget.getAttribute('data-class').split(',')

    if (selectors.length === classes.length) {
      selectors.forEach((currentSelector, j) => {
        doToggle(e.currentTarget, currentSelector.trim(), classes[j].trim())
      })
    } else {
      const targetSelector = selectors.map(selectorItem => selectorItem.trim()).join(',')
      const targetClass = classes.map(classItem => classItem.trim()).join(',')
      doToggle(e.currentTarget, targetSelector, targetClass)
    }
  }

  /**
   * Plugin Object
   * @param {Object} options User options
   * @constructor
   */
  function Classily (options) {
    this.options = extend(defaults, options)
    this.init() // Initialization Code Here
  }

  /**
   * Classily prototype
   * @public
   * @constructor
   */
  Classily.prototype = {
    init () {
      // find all matching DOM elements.
      // makes `.selectors` object available to instance.
      this.selectors = document.querySelectorAll(this.options.selector)

      for (let i = 0; i < this.selectors.length; i += 1) {
        const selector = this.selectors[i]
        // Do something w/ each matched selector node.
        selector.addEventListener('click', toggleClass)
        // do something
      }
    }, // #! init
    destroy () {
      // Remove any event listeners and undo any "init" actions here...
      this.selectors = document.querySelectorAll(this.options.selector)

      for (let i = 0; i < this.selectors.length; i += 1) {
        const selector = this.selectors[i]
        // Do something w/ each matched selector node.
        selector.removeEventListener('click', toggleClass)
        // do something
      }
    }
  }
  return Classily
}))
