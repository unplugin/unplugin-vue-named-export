import path from 'node:path'
import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import Oxc from 'unplugin-oxc/rollup'
import Vue from 'unplugin-vue/rollup'
import { describe } from 'vitest'
import VueNamedExport from '../src/vite'

describe('rollup', async () => {
  await testFixtures(
    ['tests/fixtures/*.vue'],
    async (args, id) =>
      (
        await rollupBuild(id, [
          Vue({ isProduction: true }),
          VueNamedExport(),
          Oxc(),
        ])
      ).snapshot,
    { cwd: path.resolve(__dirname, '..'), promise: true },
  )
})
