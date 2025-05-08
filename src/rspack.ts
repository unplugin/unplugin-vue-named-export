/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import VueNamedExport from 'unplugin-vue-named-export/rspack'
 *
 * default export {
 *  plugins: [VueNamedExport()],
 * }
 * ```
 */
const rspack = VueNamedExport.rspack as typeof VueNamedExport.rspack
export default rspack
export { rspack as 'module.exports' }
