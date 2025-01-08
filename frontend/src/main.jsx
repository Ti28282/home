import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'
// import Authorization from './AuthAdmin/Authorization';
// import Site from './Main/Site/Site'
// import AdminPanel from './Admin/AdminPanel';
createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Authorization/> */}
  </>
)
