import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "modern-normalize/modern-normalize.css"
import "./aos.scss"

import AOS from "aos"
import { Suspense, useEffect, useState } from "react"
import ReactGA from "react-ga"
import DefaultLayout from "../components/layout/Layout"
import Routes from "./Routes"

if (import.meta.env.PROD) {
  ReactGA.initialize(`UA-212302378-1`)
}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    Promise.all([
      document.fonts.load(`400 1rem 'Inter'`),
      document.fonts.load(`500 1rem 'Inter'`),
      document.fonts.load(`600 1rem 'Inter'`),
      document.fonts.load(`700 1rem 'Inter'`),
      document.fonts.load(`800 1rem 'Inter'`),
    ]).then(() => setFontsLoaded(true))

    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    })
  }, [])

  if (!fontsLoaded) return null
  return (
    <DefaultLayout>
      <Suspense
        fallback={
          <div
            css={`
              flex-grow: 1;
            `}
          />
        }
      >
        <Routes />
      </Suspense>
    </DefaultLayout>
  )
}

export default App
