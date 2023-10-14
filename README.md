# unplugin-vue-named-export [![npm](https://img.shields.io/npm/v/unplugin-vue-named-export.svg)](https://npmjs.com/package/unplugin-vue-named-export)

[![Unit Test](https://github.com/unplugin/unplugin-vue-named-export/actions/workflows/unit-test.yml/badge.svg)](https://github.com/unplugin/unplugin-vue-named-export/actions/workflows/unit-test.yml)

Named export for Vue SFC.

## Installation

```bash
npm i -D unplugin-vue-named-export
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import VueNamedExport from 'unplugin-vue-named-export/vite'

export default defineConfig({
  plugins: [
    VueNamedExport({
      /* options */
    }),
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VueNamedExport from 'unplugin-vue-named-export/rollup'

export default {
  plugins: [
    VueNamedExport({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [
    require('unplugin-vue-named-export/esbuild')({
      /* options */
    }),
  ],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-named-export/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

## Usage

Use pascal case named exports in Vue SFC.

```ts
import { MyComponent } from './MyComponent.vue'
import { MyCard } from './my-card.vue'
import { MyFooter } from './my_footer.vue'
```

### Options

```ts
type Options = {
  include?: string | RegExp | (string | RegExp)[]
  exclude?: string | RegExp | (string | RegExp)[]

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
```

### Volar

Support only pascal case named export for Volar.

```jsonc
// tsconfig.json
{
  // ...
  "vueCompilerOptions": {
    "plugins": ["unplugin-vue-named-export/volar"],

    "namedExport": {
      // defaults to false
      "removeDefault": false
    }
  }
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [三咲智子](https://github.com/sxzz)
