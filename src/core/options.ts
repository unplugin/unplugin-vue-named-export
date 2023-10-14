import type { BaseOptions, MarkRequired } from '@vue-macros/common'

export interface Options extends Pick<BaseOptions, 'include' | 'exclude'> {
  /**
   * Convert filename to export name
   * @default pascalCaseFn
   */
  resolveName?(id: string): string | Promise<string>
  /**
   * Whether to keep default export
   * @default false
   */
  removeDefault?: boolean
}

export type OptionsResolved = MarkRequired<Options, 'include' | 'removeDefault'>

export function resolveOption(options: Options): OptionsResolved {
  return {
    include: [/\.vue$/],
    removeDefault: false,
    ...options,
  }
}
