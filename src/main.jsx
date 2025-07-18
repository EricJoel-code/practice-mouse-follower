import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> // StrictMode ayuda a detectar problemas en la aplicación en produccion no funciona solo en desarrollo
    <App />
  </StrictMode>,
)
