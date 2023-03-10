import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  include?: FilterPattern
  exclude?: FilterPattern

  resolveName?(id: string): string | Promise<string>
}

export type OptionsResolved = Omit<
  Required<Options>,
  'exclude' | 'resolveName'
> & {
  exclude?: Options['exclude']
  resolveName?: Options['resolveName']
}

export function resolveOption(options: Options): OptionsResolved {
  return {
    include: options.include || [/\.vue$/],
    exclude: options.exclude,
    resolveName: options.resolveName
  }
}
