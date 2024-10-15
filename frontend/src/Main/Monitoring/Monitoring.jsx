// import React, {useState, useEffect} from "react";

// export default function Monitoring() {
//     const [systemInfo, setSystemInfo] = useState({});
    
//     const fetchData = () => {
//         fetch(`http://93.157.248.178:43745/user/dynamicinfo`, {
//             method: 'GET'
//         })
//         .then(response => response.json())
//         .then(data => {
//             setSystemInfo(data);    //Обработка данных: Когда получен ответ API, функция fetchData обрабатывает данные ответа, вызывая метод json() для анализа ответа в формате JSON. Результирующие данные затем сохраняются в переменной состояния systemInfo с помощью функции setSystemInfo.
//         });
//     };


//     useEffect(() => {
//         fetchData();
//         const intervalId = setInterval(fetchData, 1500)
//         return () => clearInterval(intervalId)
//     }, []);
    
//     return(
//       <>
//       </>
//     )
// }
import './Monitoring.css'
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


export default function Monitoring() {
  const [cpuUsage, setCpuUsage] = useState([]);
  const [internet_speed, setInternet_speed] = useState([])
  const [memoryUsage, setMemoryUsage] = useState([])

  const fetchData = () => {
      fetch(`http://93.157.248.178:43745/user/dynamicinfo`, {
        method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setCpuUsage(data.cpuUsage)
        setInternet_speed(data.internet_speed)
        setMemoryUsage(data.memoryUsage)    //? Обработка данных: Когда получен ответ API, функция fetchData обрабатывает данные ответа, вызывая метод json() для анализа ответа в формате JSON. Результирующие данные затем сохраняются в переменной состояния systemInfo с помощью функции setSystemInfo.
      });   //* извлечь необходимые данные из ответа API и сохранить их в data переменной состояния.
  };

  useEffect(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 1500)
      return () => clearInterval(intervalId)
  }, []);

  return (
    <div>
      <div id="container_monitoring">
        <h1>Мониторинг</h1>
        <div className="cpu_ethernet_memory">
          <p className="text_cem">CPU</p>
          {cpuUsage.length > 0 && (
            <LineChart width={450} height={265} data={cpuUsage}>
              <Line type="monotone" dataKey="usage" stroke="#8884d8" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
            </LineChart>
          )}
          <p className="text_cem">Ethernet</p>
          {internet_speed.length > 0 && (
            <LineChart width={450} height={265} data={internet_speed}>
              <Line type="monotone" dataKey="rx_bytes" stroke="#8884d8" />
              <Line type="monotone" dataKey="tx_bytes" stroke="#82ca9d" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
            </LineChart>
          )}
          <p className="text_cem">Memory</p>
          {memoryUsage.length > 0 && (
            <LineChart width={450} height={265} data={memoryUsage}>
              <Line type="monotone" dataKey="usage" stroke="#8884d8" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
            </LineChart>
          )}
        </div>
      </div>
    </div>
  );
}