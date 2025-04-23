import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './css/globals.css'
import Index from './pages/Index.jsx'
import EditProfile from './pages/EditProfile.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
)