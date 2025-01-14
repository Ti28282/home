import  { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { ADDRESS } from '../Config';


export default function CPU() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  // Определяем функцию fetchData на уровне компонента
  async function fetchData() {
    try {
        const responseCPU = await axios.get(`${ADDRESS}/user/systeminfo/CPU`)
        
        
        
          const jsonData = await responseCPU.data
          
          
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