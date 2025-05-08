import { replace } from 'muggle-string'
import { resolveName } from './core/utils'
import type { VueLanguagePlugin } from '@vue/language-core'

const plugin: VueLanguagePlugin = ({ vueCompilerOptions }) => {
  return {
    name: 'vue-named-export',
    version: 2.1,
    resolveEmbeddedCode(fileName, sfc, embeddedFile) {
      if (embeddedFile.id !== 'script_ts') return
      const exportedName = resolveName(fileName)
      // @ts-expect-error
      if (vueCompilerOptions.namedExport?.removeDefault)
        replace(
          embeddedFile.content,
          'export default ',
          `export const ${exportedName} = `,
        )
      else
        replace(embeddedFile.content, /export default .*/, (m) => {
          const stmt = m.replace('export default ', '')
          return `export const ${exportedName} = ${stmt}\nexport default ${exportedName}`
        })
    },
  }
}

// eslint-disable-next-line import/no-default-export
export default plugin
export { plugin as 'module.exports' }
