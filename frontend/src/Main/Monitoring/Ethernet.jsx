import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ADDRESS } from '../Config';
import axios from 'axios';

export default function Ethernet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const EthernetData = async () => {
    try {
      const requests = [
        axios.get(`${ADDRESS}/user/systeminfo/DOWNLOAD`), 
        axios.get(`${ADDRESS}/user/systeminfo/UPLOAD`)
      ];
      
      const responses = await Promise.all(requests); //Todo возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое из переданных промисов.
      
      const downloadData = responses[0].data;
      const uploadData = responses[1].data;

      if (!downloadData || !uploadData || !downloadData.DOWNLOAD || !uploadData.UPLOAD) {
        throw new Error('Ошибка');
      }

      const newDataPoint = {
        name: new Date().toLocaleTimeString(), //Todo Добавляем временную метку
        Download: downloadData.DOWNLOAD[0], //Todo Отрегулируйте в соответствии со структурой ответов вашего API
        Upload: uploadData.UPLOAD[0], //Todo Отрегулируйте в соответствии со структурой ответов вашего API
      };

      setData(prevData => {
        const updateDataEthernet = [...prevData, newDataPoint] //Todo Добавление новой точки
        return updateDataEthernet.slice(-10)
      }); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      EthernetData() //* Первоначальный вызов
    }, 5000); //* Периодический вызов
    return () => clearInterval(intervalId); //* Очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;


  return (
    <div>
      <ResponsiveContainer width={450} height={270}>
        <LineChart data={data}>
          <Line type="monotone" dot={false} isAnimationActive={true} dataKey="Download" stroke="#B0C4DE" strokeWidth={3} activeDot={{ r: 5 }} />
          <Line type="monotone" dot={false} isAnimationActive={true} dataKey="Upload" stroke="#BC8F8F" strokeWidth={3} activeDot={{ r: 5 }} />
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