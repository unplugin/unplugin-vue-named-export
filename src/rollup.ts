/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Starter from 'unplugin-starter/rollup'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const rollup = VueNamedExport.rollup as typeof VueNamedExport.rollup
export default rollup
