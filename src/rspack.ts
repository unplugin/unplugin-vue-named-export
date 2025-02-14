/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import Starter from 'unplugin-starter/rspack'
 *
 * default export {
 *  plugins: [Starter()],
 * }
 * ```
 */
const rspack = VueNamedExport.rspack as typeof VueNamedExport.rspack
export default rspack
