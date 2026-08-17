import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// HelmetProvider enables react-helmet-async to safely manage <head> tags
// in concurrent React 19. Must wrap the entire tree.
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
