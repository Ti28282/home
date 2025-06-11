import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './src/App.jsx'
import SystemInfo from './src/SystemInfo.jsx';


createRoot(document.getElementById('root')).render(
  <>
    {/* <SystemInfo /> */}
    <App />
  </>
)