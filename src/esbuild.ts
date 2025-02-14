/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import VueNamedExport from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import Starter from 'unplugin-starter/esbuild'
 * 
 * build({ plugins: [Starter()] })
```
 */
const esbuild = VueNamedExport.esbuild as typeof VueNamedExport.esbuild
export default esbuild
