import  { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { ADDRESS } from '../Config';


export default function CPU() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const CpuData = async () => {
    try {
        const responseCPU = await axios.get(`${ADDRESS}/user/systeminfo/CPU`)
        
        
        
          const jsonData = await responseCPU.data
          
          
          const newDataPoint = {
            name: new Date().toLocaleTimeString(), //Todo Добавляем временную метку
            CPU: jsonData.CPU[1][0], //Todo данные парсятся
        };

        setData(prevData => {
          const updateDataCPU = [...prevData, newDataPoint] //Todo берёт текущий data создаёт новый массив в котором есть старые точки и добовляет к ним новые
          return updateDataCPU.slice(-10)
        }); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    useEffect(() => {
    const intervalId = setInterval(() => {
      CpuData() //* Первоначальный вызов
    }, 1000); //* Периодический вызов
    return () => clearInterval(intervalId); //* Очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
        <ResponsiveContainer width={450} height={270}>
            <LineChart data={data}>
              <Line type="monotone" dot={false} isAnimationActive={true} dataKey="CPU" stroke="#9370DB" strokeWidth={3} activeDot={{ r: 5 }}/>
              {/* <XAxis dataKey="name" /> */}
              {/* <Legend /> */}
              <YAxis stroke='#fff'/>
              <CartesianGrid stroke="#fff" />
              <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}