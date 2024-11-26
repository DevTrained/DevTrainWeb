import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Service_Home from './Pages/Service_Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Service_Home/> */}
  </StrictMode>,
)
