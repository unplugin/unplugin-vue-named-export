/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import VueNamedExport from 'unplugin-vue-named-export/farm'
 *
 * export default {
 *   plugins: [VueNamedExport()],
 * }
 * ```
 */
const farm = VueNamedExport.farm as typeof VueNamedExport.farm
export default farm
export { farm as 'module.exports' }
