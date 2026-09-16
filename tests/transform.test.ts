import { describe, expect, test } from 'vitest'
import { VueNamedExport } from '../src'
import type { Options } from '../src/core/options'

async function transform(
  code: string,
  id = '/component.vue',
  options: Options = {},
) {
  const plugin = VueNamedExport.raw(options, { framework: 'rollup' })
  const hook = plugin.transform!
  const handler = typeof hook === 'function' ? hook : hook.handler
  const result = await handler.call({} as never, code, id)
  return typeof result === 'string' ? result : result?.code
}

describe('transform', () => {
  test.each([
    '{}',
    '/* @__PURE__ */ defineComponent({})',
    '// component\n{}',
    '(/* component */ {})',
  ])('preserves the default declaration: %s', async (declaration) => {
    expect(await transform(`export default ${declaration};`)).toBe(
      `export const Component = ${declaration};\nexport default Component;`,
    )
  })

  test.each(['function Component() {}', 'class Component {}'])(
    'preserves a declaration without a semicolon: %s',
    async (declaration) => {
      expect(await transform(`export default ${declaration}`)).toBe(
        `export const Component = ${declaration}\nexport default Component;`,
      )
    },
  )

  test('handles comments and newlines between export keywords', async () => {
    expect(
      await transform('export /* comment */\n default /* @__PURE__ */ fn();'),
    ).toBe(
      'export const Component = /* @__PURE__ */ fn();\nexport default Component;',
    )
  })

  test('uses UTF-16 offsets for Unicode source', async () => {
    expect(await transform('const text = "你好🌏"; export default {};')).toBe(
      'const text = "你好🌏"; export const Component = {};\nexport default Component;',
    )
  })

  test.each([
    ['/component.ts', '{} as const'],
    ['/component.mts?vue', '{} as const'],
    ['/component.cts', '{} as const'],
    ['/component.tsx', '() => <div />'],
    ['/component.jsx', '() => <div />'],
  ])('parses the language of %s', async (id, declaration) => {
    expect(
      await transform(`export default ${declaration};`, id, {
        resolveName: () => 'Component',
      }),
    ).toBe(
      `export const Component = ${declaration};\nexport default Component;`,
    )
  })

  test('removes the default export and updates Vite HMR', async () => {
    expect(
      await transform(
        'export default {};\nconst { default: updated, named } = mod;',
        '/component.vue',
        {
          removeDefault: true,
          resolveName: () => Promise.resolve('CustomComponent'),
        },
      ),
    ).toBe(
      'export const CustomComponent = {};\nconst { "CustomComponent": updated, named } = mod;',
    )
  })

  test('skips modules without a default export', async () => {
    expect(await transform('export const component = {};')).toBeUndefined()
  })

  test('rejects invalid syntax', async () => {
    await expect(transform('export default {')).rejects.toThrow(SyntaxError)
  })
})
