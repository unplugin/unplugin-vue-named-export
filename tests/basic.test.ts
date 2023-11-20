import path from 'node:path'
import { describe } from 'vitest'
import {
  RollupEsbuildPlugin,
  RollupRemoveVueFilePathPlugin,
  RollupVue,
  rollupBuild,
  testFixtures,
} from '@vue-macros/test-utils'
import VueNamedExport from '../src/vite'

describe('fixtures', async () => {
  await testFixtures(
    ['tests/fixtures/*.vue'],
    (args, id) =>
      rollupBuild(id, [
        RollupVue(),
        VueNamedExport(),
        RollupRemoveVueFilePathPlugin(),
        RollupEsbuildPlugin({
          target: 'esnext',
        }),
      ]),
    { cwd: path.resolve(__dirname, '..'), promise: true },
  )
})
