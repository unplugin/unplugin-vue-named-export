const { default: plugin } = require('tsx/cjs/api').require(
  '../src/volar.ts',
  __filename,
)
module.exports = plugin
