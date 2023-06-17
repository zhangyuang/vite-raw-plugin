# Vite Raw Plugin

It's similar to [raw-loader](https://www.npmjs.com/package/raw-loader) in Webpack。 Vite Raw Plugin will transfrom any type file to string.

## Usage

import markdown file to string in Vue/React component and use markdown it transfrom

```js
const { join } = require('path')
const vuePlugin = require('@vitejs/plugin-vue')
const markdownRawPlugin = require('vite-raw-plugin')

module.exports = {
  plugins: [
    vuePlugin(),
    markdownRawPlugin({
      fileRegex: /\.md$/
    })
  ],
  define: {
    __isBrowser__: true
  },
  resolve: {
    alias: {
      '@': join(process.cwd(), './web')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
}

```

use in js file.

```js
import content from 'xxx.md'

const md = require('markdown-it')
md.render(content)
```

### TypeScript

To use with TypeScript, create a ``global.d.ts`` in your ``./src/`` directory

```ts
declare module '*.md' {
  const content: string
  export default content
}
```
