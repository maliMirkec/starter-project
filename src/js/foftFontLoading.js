/**
 * A better font loading using FontFaceObserver.
 *
 * @module CriticalFOFT
 * @author Zach Leatherman
 * @see https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft
 */

/**
 * @constructor
 * @author Zach Leatherman
 * @see https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft
 */
let FontFaceObserver;

// =include fontfaceobserver/fontfaceobserver.js

/**
 * @function
 * @name Anonymous self-invoked function
 * @description Adds classes to document when each font loads successfully.
 * If fonts are already loaded, then skip loading.
 */
(function () {
  if (window.sessionStorage.criticalFoftDataUriFontsLoaded) {
    document.documentElement.className += ' fonts-stage-1 fonts-stage-2'
    return
  }

  /**
   * A subset of default font type.
   *
   * @const
   * @name fontASubset
   * @type {Object}
   */
  const fontASubset = new FontFaceObserver('LatoSubset')

  /**
   * A promise that adds 'fonts-stage-1' if {@link fontASubset}
   * is loaded successfully.
   *
   * @method
   * @name Promise
   */
  Promise.all([fontASubset.load()]).then(() => {
    document.documentElement.className += ' fonts-stage-1'

    /**
     * Default font type.
     *
     * @const
     * @name fontA
     * @type {Object}
     */
    const fontA = new FontFaceObserver('Lato')

    /**
     * Second font type.
     *
     * @const
     * @name fontB
     * @type {Object}
     */
    const fontB = new FontFaceObserver('LatoBold')

    /**
     * Third font type.
     *
     * @const
     * @name fontC
     * @type {Object}
     */
    const fontC = new FontFaceObserver('LatoItalic')

    /**
     * Fourth font type.
     *
     * @const
     * @name fontD
     * @type {Object}
     */
    const fontD = new FontFaceObserver('LatoBoldItalic')

    /**
     * A promise that adds 'fonts-stage-2' if
     * {@link fontA}, {@link fontB}, {@link fontC}, {@link fontD}
     * are loaded successfully.
     * Also, set Critical FOFT session variable to true.
     *
     * @method
     * @name Promise
     */
    Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(() => {
      document.documentElement.className += ' fonts-stage-2'

      // Optimization for Repeat Views
      window.sessionStorage.criticalFoftDataUriFontsLoaded = true
    })
  })
})()
