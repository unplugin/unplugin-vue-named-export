/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import Starter from 'unplugin-starter/farm'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const farm = VueNamedExport.farm as typeof VueNamedExport.farm
export default farm
