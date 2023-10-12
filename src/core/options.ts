import type { BaseOptions } from '@vue-macros/common'

export interface Options extends Pick<BaseOptions, 'include' | 'exclude'> {
  resolveName?(id: string): string | Promise<string>
}

export type OptionsResolved = Pick<Required<Options>, 'include'> &
  Pick<Options, 'exclude' | 'resolveName'>

export function resolveOption(options: Options): OptionsResolved {
  return {
    include: [/\.vue$/],
    ...options,
  }
}
