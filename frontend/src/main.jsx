import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'
import Site from './Main/Site/Site';
// import LoadingSite from './Loading/WebsiteLoading';

createRoot(document.getElementById('root')).render(
  <>
    {/* <LoadingSite></LoadingSite> */}
    <App></App>
    {/* <Site /> */}
  </>
)