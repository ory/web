module.exports = {
  ...require('ory-prettier-styles'),
  "importOrder": [
   "^\\.\\./(?!.*\\.[a-z]+$)(.*)$",
   "^\\./(?!.*\\.[a-z]+$)(.*)$",
   "^\\.(?!.*module\\.css$)(.*)\\.css$",
   "^\\.(.*)\\.module\\.css$",
    "^\\.(.*)\\.(?!css$)[a-z]+$",
  ],
  "importOrderSeparation": true,
  "experimentalBabelParserPluginsList" : ["jsx", "typescript"]
}
