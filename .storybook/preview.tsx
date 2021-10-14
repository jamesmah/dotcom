import AppProviders from "../src/core/AppProviders"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    controls: { hideNoControlsWarning: true },
  },
}

export const decorators = [(story) => <AppProviders>{story()}</AppProviders>]
