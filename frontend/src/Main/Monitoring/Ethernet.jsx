import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ADDRESS, Token_Fetch_CONFIG } from '../Config';
import axios from 'axios';

// ! NEED AXIOS 
export default function Ethernet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchData = async () => {
    try {
      const requests = [
        fetch(`${ADDRESS}/user/systeminfo/DOWNLOAD`,Token_Fetch_CONFIG),fetch(`${ADDRESS}/user/systeminfo/UPLOAD`,Token_Fetch_CONFIG)
      ]

      //const requests = [
       // axios.get(`${ADDRESS}/user/systeminfo/DOWNLOAD`),
      //  axios.get(`${ADDRESS}/user/systeminfo/UPLOAD`)
      //]
      const responses = await Promise.all(requests);
      
      // Проверка, все ли ответы в порядке
      responses.forEach((response) => {
        if (!response.ok) {
          throw new Error('Сеть не отвечает');
        }
      });

      const jsonData = await Promise.all(responses.map(response => response.json()));
      const newDataPoint = {
        name: new Date().toLocaleTimeString(), // Добавляем временную метку
        Download: jsonData[0].DOWNLOAD[0], // Отрегулируйте в соответствии со структурой ответов вашего API
        Upload: jsonData[1].UPLOAD[0]    // Отрегулируйте в соответствии со структурой ответов вашего API
      };

      // console.log(newDataPoint); // Логируем новую точку данных

      setData(prevData => [...prevData, newDataPoint]); // Добавляем новую точку данных
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData() // Первоначальный вызов
    }, 5000); // Периодический вызов
    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;


  return (
    <div>
      <ResponsiveContainer width={450} height={270}>
        <LineChart data={data}>
          <Line type="monotone" dot={false} isAnimationActive={false} dataKey="Download" stroke="#B0C4DE" strokeWidth={3} activeDot={{ r: 5 }} />
          <Line type="monotone" dot={false} isAnimationActive={false} dataKey="Upload" stroke="#BC8F8F" strokeWidth={3} activeDot={{ r: 5 }} />
          {/* <XAxis dataKey="name" /> */}
          <YAxis stroke='#fff' />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid stroke="#ccc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}