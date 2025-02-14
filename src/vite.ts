/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Starter from 'unplugin-starter/vite'
 *
 * export default defineConfig({
 *   plugins: [Starter()],
 * })
 * ```
 */
const vite = VueNamedExport.vite as typeof VueNamedExport.vite
export default vite
