module.exports = {
  ...require('ory-prettier-styles'),
  "importOrder": [
    "^\\.(.*)[^\\.][^c][^s][^s]$",
    "^\\.(.*)\\.css$",
    "^\\.(.*)\\.module\\.css$",
  ],
  "importOrderSeparation": true,
  "experimentalBabelParserPluginsList" : ["jsx", "typescript"]
}
