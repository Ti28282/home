import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function CPU() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const port = 4666;

  // Определяем функцию fetchData на уровне компонента
  async function fetchData() {
    try {
        const responseCPU = await fetch(`http://93.157.248.178:${port}/user/systeminfo/CPU`);
        if (!responseCPU.ok) {
          throw new Error('Сеть не отвечает');
        }
          const jsonData = await responseCPU.json()
          // console.log(jsonData)
          const newDataPoint = {
            name: new Date().toLocaleTimeString(), // Добавляем временную метку
            CPU: jsonData.CPU[1][0], // данные парсятся
        };

        setData(prevData => [...prevData, newDataPoint]); //берёт текущий data создаёт новый массив в котором есть старые точки и добовляет к ним новые
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
              <Line type="monotone" dot={false} isAnimationActive={false} dataKey="CPU" stroke="#9370DB" strokeWidth={3} activeDot={{ r: 5 }}/>
              {/* <XAxis dataKey="name" /> */}
              <YAxis stroke='#fff'/>
              <CartesianGrid stroke="#fff" />
              <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}