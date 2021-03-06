import React from "react"
import ReactDOM from "react-dom"
import App from "./core/App"
import AppProviders from "./core/AppProviders"

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById(`root`)
)
