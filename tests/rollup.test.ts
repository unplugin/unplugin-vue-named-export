import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import Oxc from 'unplugin-oxc/rollup'
import Vue from 'unplugin-vue/rollup'
import { describe } from 'vitest'
import VueNamedExport from '../src/vite'

describe('rollup', async () => {
  await testFixtures(
    'fixtures/*.vue',
    async (args, id) =>
      (
        await rollupBuild(id, [
          Vue({ isProduction: true }),
          VueNamedExport(),
          Oxc(),
        ])
      ).snapshot,
    {
      cwd: import.meta.dirname,
      promise: true,
    },
  )
})
