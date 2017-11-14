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
   @private
   * Find target elements and toggle classes
   * @param {Object} cur Current element (that users clicks on)
   * @param {String} sel Selectors for finding target elements
   * @param {String} cl Classes ti toggle on target elements
   */
  const toggleFunction = function (cur, sel, cl) {
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
   @private
   * Get config parameters from data attributes and pass them to toggle function
   * @param {Object} event Event object (click)
   */
  const toggleEvent = function (event) {
    if (event.currentTarget.getAttribute('data-prevent') === 'default') {
      event.preventDefault()
    }

    const selectors = event.currentTarget.getAttribute('data-target').split(',')
    const classes = event.currentTarget.getAttribute('data-class').split(',')

    if (selectors.length === classes.length) {
      selectors.forEach((currentSelector, j) => {
        toggleFunction(event.currentTarget, currentSelector.trim(), classes[j].trim())
      })
    } else {
      const targetSelector = selectors.map(selectorItem => selectorItem.trim()).join(',')
      const targetClass = classes.map(classItem => classItem.trim()).join(',')
      toggleFunction(event.currentTarget, targetSelector, targetClass)
    }
  }

  /**
   * Plugin Object
   * @param {Object} options User options
   * @constructor
   */
  function Classily (options) {
    this.options = extend(defaults, options)
    this.init()
  }

  /**
   * Classily prototype
   * @public
   * @constructor
   */
  Classily.prototype = {
    init () {
      // Find all matching DOM elements
      this.selectors = document.querySelectorAll(this.options.selector)

      for (let i = 0; i < this.selectors.length; i += 1) {
        const selector = this.selectors[i]
        // Attach click event on matching DOM element and call toggle event
        selector.addEventListener('click', toggleEvent)
      }
    },
    destroy () {
      // Find all matching DOM elements
      this.selectors = document.querySelectorAll(this.options.selector)

      for (let i = 0; i < this.selectors.length; i += 1) {
        const selector = this.selectors[i]
        // Dettach click event on matching DOM element
        selector.removeEventListener('click', toggleEvent)
      }
    }
  }
  return Classily
}))
