import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/globals.css'
import Index from './pages/Index.jsx'
import EditProfile from './pages/EditProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Index />
  </StrictMode>,
)