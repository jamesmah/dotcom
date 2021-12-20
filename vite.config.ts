import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== `test`,
      babel: {
        plugins: [
          [
            `babel-plugin-styled-components`,
            {
              displayName: false,
            },
          ],
        ],
      },
    }),
    process.env.NODE_ENV !== `test` ? Checker({ typescript: true }) : undefined,
  ],
})
