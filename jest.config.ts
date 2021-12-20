import { Config } from "@jest/types"

const config: Config.InitialOptions = {
  roots: [`<rootDir>/src`],
  testMatch: [
    `<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}`,
    `<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}`,
  ],
  transform: {
    "^.+\\.(ts|tsx)$": `<rootDir>/node_modules/babel-jest`,
  },
  transformIgnorePatterns: [
    `[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$`,
  ],
  resetMocks: true,
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: [`<rootDir>/jest.setup.ts`],
}

export default config
