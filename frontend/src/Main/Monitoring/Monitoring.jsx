import './Monitoring.css'
import React from 'react';
import CPU from './CPU';
import Ethernet from './Ethernet';
import RAM from './RAM'
import BackgroundProvider from '../Weather/BackgroundContext';

export default function Monitoring() {

  return (
    <BackgroundProvider>
      <div id="container_monitoring">
        <h1>Мониторинг</h1>
        <div className="cpu_ethernet_memory">
          <p className="text_cem">CPU</p>
            <CPU/>
          <p className="text_cem">Ethernet</p>
            <Ethernet/>
          <p className="text_cem">RAM</p>
            <RAM/>
        </div>
      </div>
    </BackgroundProvider>
  );
}