/**
 * A better CSS Loading.
 *
 * @module Deferred Styles
 * @author Google Developers
 * @see https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
 */

/**
 * @function
 * @name loadDeferredStyles
 * @description Loads CSS files by deferring them to the end.
 */
const loadDeferredStyles = () => {
  /**
   * HTML element #deferredStyles;
   *
   * @const
   * @name addStylesNode
   * @type {HTMLElement}
   */
  const addStylesNode = document.getElementById('deferredStyles')

  /**
   * New empty div that will be appended at the end
   * of the body. In it we will load our styles.
   *
   * @const
   * @name replacement
   * @type {HTMLElement}
   */
  const replacement = document.createElement('div')

  replacement.innerHTML = addStylesNode.textContent
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode)
}

if (window.requestAnimationFrame) {
  window.requestAnimationFrame(() => {
    window.setTimeout(loadDeferredStyles, 0)
  })
} else {
  window.addEventListener('load', loadDeferredStyles)
}
