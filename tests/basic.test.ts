import path from 'node:path'
import {
  rollupBuild,
  RollupEsbuildPlugin,
  RollupRemoveVueFilePathPlugin,
  RollupVue,
  testFixtures,
} from '@vue-macros/test-utils'
import { describe } from 'vitest'
import VueNamedExport from '../src/vite'

describe('fixtures', async () => {
  await testFixtures(
    ['tests/fixtures/*.vue'],
    (args, id) =>
      rollupBuild(id, [
        RollupVue({ isProduction: true }),
        VueNamedExport(),
        RollupRemoveVueFilePathPlugin(),
        RollupEsbuildPlugin({
          target: 'esnext',
        }),
      ]),
    { cwd: path.resolve(__dirname, '..'), promise: true },
  )
})
