import { FileKind, type VueLanguagePlugin, replace } from '@vue/language-core'
import { resolveName } from './core/utils'

const plugin: VueLanguagePlugin = () => {
  return {
    name: 'vue-named-export',
    version: 1,
    resolveEmbeddedFile(fileName, sfc, embeddedFile) {
      if (embeddedFile.kind !== FileKind.TypeScriptHostFile) return
      const exportedName = resolveName(fileName)
      replace(
        embeddedFile.content,
        'export default ',
        `export const ${exportedName} = `
      )
    },
  }
}

// eslint-disable-next-line import/no-default-export
export default plugin
