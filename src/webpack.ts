/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import VueNamedExport from 'unplugin-vue-named-export/webpack'
 *
 * default export {
 *  plugins: [VueNamedExport()],
 * }
 * ```
 */
const webpack = VueNamedExport.webpack as typeof VueNamedExport.webpack
export default webpack
export { webpack as 'module.exports' }
