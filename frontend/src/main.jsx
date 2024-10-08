import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Authorization from './AuthAdmin/Authorization'
// import Administrator from './AuthAdmin/Administrator'
// import SystemWeatherTrack from './Main/SystemWeatherTrack'
import Weather from './Main/Weather/Weather.jsx'
// import Testweather from './Main/Weather/testweather.jsx'
// import NavigationWindow from './Main/Navigation/NavigationWindow.jsx'
// import Error from './Main/Error.jsx'
// import SystemUbuntu from './Main/System/SystemUbuntu'

createRoot(document.getElementById('root')).render(
  <>
    <Weather/>
  </>
)
