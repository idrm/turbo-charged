import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-600.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'ui'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
