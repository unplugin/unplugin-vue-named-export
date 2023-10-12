import path from 'node:path'
import { camelCase } from 'change-case'

export function resolveName(id: string) {
  return camelCase(path.basename(id, 'vue'))
}
