const { override, addBabelPlugin, addWebpackAlias } = require(`customize-cra`)

module.exports = override(
  addWebpackAlias({
    "@mui/styled-engine": `@mui/styled-engine-sc`,
  }),
  addBabelPlugin([
    `babel-plugin-styled-components`,
    {
      displayName: false,
    },
  ])
)
