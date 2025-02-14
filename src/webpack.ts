/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import Starter from 'unplugin-starter/webpack'
 *
 * default export {
 *  plugins: [Starter()],
 * }
 * ```
 */
const webpack = VueNamedExport.webpack as typeof VueNamedExport.webpack
export default webpack
