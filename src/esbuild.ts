/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import { VueNamedExport } from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import VueNamedExport from 'unplugin-vue-named-export/esbuild'
 * 
 * build({ plugins: [VueNamedExport()] })
```
 */
const esbuild = VueNamedExport.esbuild as typeof VueNamedExport.esbuild
export default esbuild
export { esbuild as 'module.exports' }
