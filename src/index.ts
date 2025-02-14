import { babelParse, getLang } from 'ast-kit'
import { generateTransform, MagicString } from 'magic-string-ast'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { createFilter } from 'unplugin-utils'
import { resolveOption, type Options } from './core/options'
import { resolveName } from './core/utils'
import type * as t from '@babel/types'

function getNodeStart(node: t.Node) {
  if (node.leadingComments && node.leadingComments.length > 0) {
    return node.leadingComments[0].start!
  }
  return node.start!
}

const VueNamedExport: UnpluginInstance<Options | undefined, false> =
  createUnplugin((rawOptions = {}) => {
    const options = resolveOption(rawOptions)
    const filter = createFilter(options.include, options.exclude)

    const name = 'unplugin-vue-named-export'
    return {
      name,
      enforce: 'post',

      transformInclude(id) {
        return filter(id)
      },

      async transform(code, id) {
        const lang = getLang(id)

        const program = babelParse(code, lang)
        const defaultExport = program.body.find(
          (node): node is t.ExportDefaultDeclaration =>
            node.type === 'ExportDefaultDeclaration',
        )
        if (!defaultExport) return

        const s = new MagicString(code)
        const resolvedName = await (options.resolveName || resolveName)(id)

        s.overwrite(
          defaultExport.start!,
          getNodeStart(defaultExport.declaration),
          `export const ${resolvedName} = `,
        )

        if (!options.removeDefault) {
          s.appendLeft(defaultExport.end!, `\nexport default ${resolvedName};`)
        } else {
          // hack Vite HMR
          s.replace(
            /const \{ default: updated, (.*) \} = mod/,
            (_, $1) => `const { "${resolvedName}": updated, ${$1} } = mod`,
          )
        }

        return generateTransform(s, id)
      },

      vite: {
        config(config, { command }) {
          if (command !== 'serve') return
          return {
            optimizeDeps: {
              esbuildOptions: {
                plugins: [
                  {
                    name: `${name}-optimize-deps`,
                    setup(build) {
                      build.onLoad({ filter: /\.vue($|\?)/ }, async (args) => {
                        const resolvedName = await (
                          options.resolveName || resolveName
                        )(args.path)
                        let js = `export const ${resolvedName} = {}`
                        if (!options.removeDefault) {
                          js += `\nexport default ${resolvedName}`
                        }
                        return { contents: js }
                      })
                    },
                  },
                ],
              },
            },
          }
        },
      },
    }
  })
export default VueNamedExport
