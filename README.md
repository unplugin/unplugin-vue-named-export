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
  plugins: [VueNamedExport()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VueNamedExport from 'unplugin-vue-named-export/rollup'

export default {
  plugins: [VueNamedExport()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-vue-named-export/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-vue-named-export/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-vue-named-export/webpack')()],
  },
}
```

<br></details>

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [三咲智子](https://github.com/sxzz)
