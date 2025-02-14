import type { FilterPattern } from 'unplugin-utils'

type MarkRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export interface Options {
  include?: FilterPattern
  exclude?: FilterPattern

  /**
   * Convert filename to export name
   * @default pascalCaseFn
   */
  resolveName?: (id: string) => string | Promise<string>
  /**
   * Whether to remove default export
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
