const path = require('path');

module.exports = {
  assetsDir: '../static',
  publicPath: './',
  outputDir: path.resolve(__dirname, '../server/app/templates'),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
