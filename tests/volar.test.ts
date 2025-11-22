import path from 'node:path'
import { createVueProgram } from '@sxzz/test-utils'
import { describe, expect, test } from 'vitest'

const fixtures = import.meta.glob('./fixtures/*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const plugin = path.resolve(import.meta.dirname, '../dist/volar.mjs')

describe('volar', async () => {
  const program = await createVueProgram(
    [path.resolve(import.meta.dirname, 'fixtures/main.ts')],
    {},
    {
      plugins: [plugin],
      // @ts-expect-error
      namedExport: { removeDefault: true },
    },
  )

  test.each(Object.keys(fixtures))('%s', (id) => {
    const file = program.getSourceFile(path.resolve(import.meta.dirname, id))
    const vlsCode = file?.getText()
    expect(vlsCode).contain('export const ')
    expect(vlsCode).not.contain('export default')
  })
})
