import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Authorization from './AuthAdmin/Authorization'
// import Administrator from './AuthAdmin/Administrator'
// import SystemWeatherTrack from './Main/SystemWeatherTrack'
import Weather from './Main/Weather/Weather.jsx'
// import Testweather from './Main/Weather/testweather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weather />
  </StrictMode>
)
