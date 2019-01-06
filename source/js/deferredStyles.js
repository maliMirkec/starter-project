"use strict";

/**
 * A better CSS Loading.
 *
 * @module DeferredStyles
 * @author Google Developers
 * @see https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
 */

/**
 * @function
 * @name loadDeferredStyles
 * @description Loads CSS files by deferring them to the end.
 */
var loadDeferredStyles = function loadDeferredStyles() {
  /**
   * HTML element #deferredStyles;
   *
   * @const
   * @name addStylesNode
   * @type {HTMLElement}
   */
  var addStylesNode = document.getElementById('deferredStyles');
  /**
   * New empty div that will be appended at the end
   * of the body. In it we will load our styles.
   *
   * @const
   * @name replacement
   * @type {HTMLElement}
   */

  var replacement = document.createElement('div');
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
};

if (window.requestAnimationFrame) {
  window.requestAnimationFrame(function () {
    window.setTimeout(loadDeferredStyles, 0);
  });
} else {
  window.addEventListener('load', loadDeferredStyles);
}