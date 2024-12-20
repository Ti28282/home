import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Ethernet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const port = 4666;

  const fetchData = async () => {
    try {
      const requests = [
        fetch(`http://93.157.248.178:${port}/user/systeminfo/DOWNLOAD`),
        fetch(`http://93.157.248.178:${port}/user/systeminfo/UPLOAD`)
      ];

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
    fetchData(); // Первоначальный вызов
    const intervalId = setInterval(fetchData, 10000); // Периодический вызов
    return () => clearInterval(intervalId); // Очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;


  return (
    <div>
      <ResponsiveContainer width={450} height={275}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="Download" stroke="#B0C4DE" strokeWidth={3} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="Upload" stroke="#BC8F8F" strokeWidth={3} activeDot={{ r: 5 }} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid stroke="#ccc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}