import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
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
    Checker({ typescript: true }),
  ],
})
