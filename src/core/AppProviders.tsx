import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import GlobalStyle from "./GlobalStyle"

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {children}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppProviders
