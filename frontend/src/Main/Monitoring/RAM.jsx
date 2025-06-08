import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { ADDRESS } from '../Config';
import axios from 'axios';

export default function ResponseRAM() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const RamData = async () => {
    try {
        const responseRAM = await axios.get(`${ADDRESS}/user/systeminfo/RAM`)
        const jsonData = responseRAM.data
      //Todo Предполагается, что jsonData - это объект с полем RAM
        const newDataPoint = {
          name: new Date().toLocaleTimeString(),
          RAM: jsonData.RAM,
      //Todo Добавьте дополнительные значения, если у вас есть
          minRAM: jsonData.minRAM, //* минимальное значение RAM
          maxRAM: jsonData.maxRAM  //* максимальное значение RAM
        };
        setData(prevData => {
          const updateDataRAM = [...prevData, newDataPoint]
          return updateDataRAM.slice(-10)
        }); //берёт текущий data создаёт новый массив в котором есть старые точки и добовляет к ним новые
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
  useEffect(() => {
    const intervalId = setInterval(() => {
      RamData() //* Первоначальный вызов
    }, 1000); //* Периодический вызов
    return () => clearInterval(intervalId); //* Очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ResponsiveContainer width={450} height={270}>
      <LineChart data={data}>
        <CartesianGrid  />
        {/* <XAxis dataKey="name" /> */}
        <YAxis stroke='#fff' />
        <Tooltip />
        {/* <Legend /> */}
        <ReferenceLine y={0} stroke="#fff" />
        <Line type="monotone" dot={false} isAnimationActive={true} dataKey="RAM" stroke="#ADFF2F" strokeWidth={3} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}