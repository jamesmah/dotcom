module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/preset-create-react-app",
  ],
  babel: async (options) => {
    options.plugins.push([
      "babel-plugin-styled-components",
      {
        displayName: false,
      },
    ])
    return options
  },
}
