import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'
// import Authorization from './AuthAdmin/Authorization';
// import Site from './Main/Site/Site'
// import AdminPanel from './Admin/AdminPanel';
// import Monitoring from './Main/Monitoring/Monitoring';
// import CPU from './Main/Monitoring/CPU';
createRoot(document.getElementById('root')).render(
  <>

    <App />
    {/* <CPU /> */}
    {/* <Authorization/> */}
  </>
)