import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Authorization from './AuthAdmin/Authorization'
import Administrator from './AuthAdmin/Administrator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Administrator />
  </StrictMode>
)
