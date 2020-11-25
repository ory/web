const remarkCustomBlocks = require(`remark-admonitions`);

module.exports= {
  setParserPlugins: (options) => {
    return [remarkCustomBlocks, options];
  }
};
