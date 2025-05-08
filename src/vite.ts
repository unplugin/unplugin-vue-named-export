/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import VueNamedExport from 'unplugin-vue-named-export/vite'
 *
 * export default defineConfig({
 *   plugins: [VueNamedExport()],
 * })
 * ```
 */
const vite = VueNamedExport.vite as typeof VueNamedExport.vite
export default vite
export { vite as 'module.exports' }
