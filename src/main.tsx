import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Fuentes instaladas via @fontsource
import '@fontsource/great-vibes'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/inter/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
