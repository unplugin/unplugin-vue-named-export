import path from 'node:path'
import { pascalCase } from 'change-case'

export function resolveName(id: string) {
  return pascalCase(path.basename(id, 'vue'))
}
