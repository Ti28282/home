import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

export default function ResponseRAM() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const port = 4666;

  const fetchData = async () => {
    try {
      const responseRAM = await fetch(`http://93.157.248.178:${port}/user/systeminfo/RAM`);
      if (!responseRAM.ok) {
        throw new Error('Сеть не отвечает');
      }
      const jsonData = await responseRAM.json();
      
      // Предполагается, что jsonData - это объект с полем RAM
      const newDataPoint = {
        name: new Date().toLocaleTimeString(),
        RAM: jsonData.RAM,
        // Добавьте дополнительные значения, если у вас есть
        minRAM: jsonData.minRAM, // минимальное значение RAM
        maxRAM: jsonData.maxRAM  // максимальное значение RAM
      };
      
      setData(prevData => [...prevData, newDataPoint]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // первоначальный вызов
    const intervalId = setInterval(fetchData, 5000); // периодический вызов
    return () => clearInterval(intervalId); // очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ResponsiveContainer width={450} height={275}>
      <LineChart data={data}>
        <CartesianGrid  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <ReferenceLine y={0} stroke="#fff" />
        <Line type="monotone" dataKey="RAM" stroke="#ADFF2F" strokeWidth={3} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}