/**
 * @module Classily
 */
let Classily

// =include classily.js/Classily.min.js

/**
 * Classily.js configuration.
 *
 * @const {Object}
 * @property {string} selector:'.js-classily' - selector used to initialize Classily.js
 * @author Silvestar Bistrović <malimirkeccita@gmail.com>
 * @see https://github.com/maliMirkec/Classily.js
 */
const ClassilyConfig = {
  selector: '.js-classily'
}

/**
 * Global Classily.js initialization configured with {@link ClassilyConfig}.
 *
 * @author Silvestar Bistrović <malimirkeccita@gmail.com>
 * @see https://github.com/maliMirkec/Classily.js
 */
const classily = new Classily(ClassilyConfig)

classily.init()
