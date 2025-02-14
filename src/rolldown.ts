/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import Starter from 'unplugin-starter/rolldown'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const rolldown = VueNamedExport.rolldown as typeof VueNamedExport.rolldown
export default rolldown
