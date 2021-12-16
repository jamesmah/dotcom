import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import GlobalStyle from "./GlobalStyle"

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter basename={import.meta.env.PUBLIC_URL as string}>
      {children}
    </BrowserRouter>
  </ThemeProvider>
)

export default AppProviders
