/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import VueNamedExport from 'unplugin-vue-named-export/rollup'
 *
 * export default {
 *   plugins: [VueNamedExport()],
 * }
 * ```
 */
const rollup = VueNamedExport.rollup as typeof VueNamedExport.rollup
export default rollup
export { rollup as 'module.exports' }
