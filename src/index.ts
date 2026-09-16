import { withMagicString } from 'rolldown-string'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { langFromPath, parse } from 'yuku-parser'
import { resolveOption, type Options } from './core/options'
import { resolveName } from './core/utils'

export const VueNamedExport: UnpluginInstance<Options | undefined, false> =
  createUnplugin((rawOptions = {}) => {
    const options = resolveOption(rawOptions)

    const name = 'unplugin-vue-named-export'
    return {
      name,
      enforce: 'post',

      transform: {
        filter: {
          id: {
            include: options.include,
            exclude: options.exclude,
          },
        },
        handler: withMagicString(async (s, id) => {
          const code = s.toString()

          const { program, tokens, diagnostics } = parse(code, {
            lang: langFromPath(id.split(/[?#]/, 1)[0]),
            tokens: true,
          })
          const error = diagnostics.find(({ severity }) => severity === 'error')
          if (error) {
            throw new SyntaxError(`${id}:${error.start}: ${error.message}`)
          }

          const defaultExport = program.body.find(
            (node) => node.type === 'ExportDefaultDeclaration',
          )
          if (!defaultExport) return

          const resolvedName = await (options.resolveName || resolveName)(id)

          s.overwrite(
            defaultExport.start,
            // Replace only the export/default tokens, preserving comments and parentheses.
            tokens!.end(tokens!.range(defaultExport)[0] + 1),
            `export const ${resolvedName} =`,
          )

          if (options.removeDefault) {
            // hack Vite HMR
            s.replace(
              /const \{ default: updated, (.*) \} = mod/,
              (_, $1) => `const { "${resolvedName}": updated, ${$1} } = mod`,
            )
          } else {
            s.appendLeft(defaultExport.end, `\nexport default ${resolvedName};`)
          }
        }),
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
