import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './src/website/App.jsx'
import LoginPage from './src/auth/loginPage.jsx';
import RegPage from './src/auth/regPage.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <LoginPage />
    {/* <RegPage /> */}
  </>
)