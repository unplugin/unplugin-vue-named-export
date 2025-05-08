/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import VueNamedExport from 'unplugin-vue-named-export/rolldown'
 *
 * export default {
 *   plugins: [VueNamedExport()],
 * }
 * ```
 */
const rolldown = VueNamedExport.rolldown as typeof VueNamedExport.rolldown
export default rolldown
export { rolldown as 'module.exports' }
