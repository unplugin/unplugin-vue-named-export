import { rolldownBuild, testFixtures } from '@sxzz/test-utils'
import Oxc from 'unplugin-oxc/rollup'
import Vue from 'unplugin-vue/rollup'
import { describe } from 'vitest'
import VueNamedExport from '../src/rollup'

describe('rolldown', async () => {
  await testFixtures(
    'fixtures/*.vue',
    async (args, id) =>
      (
        await rolldownBuild(
          id,
          [Vue({ isProduction: true }), VueNamedExport(), Oxc()],
          { external: ['vue'] },
        )
      ).snapshot,
    {
      cwd: import.meta.dirname,
      promise: true,
    },
  )
})
