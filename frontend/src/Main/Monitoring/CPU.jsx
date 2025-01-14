<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
=======
import  { useState, useEffect } from 'react';
>>>>>>> e29b037f0922d2147d2b1eaf56c14eff69414c90
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { ADDRESS } from '../Config';


export default function CPU() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth()
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczNjYxNTc2NiwianRpIjoiNTgwNTg0ZmUtYjgxZC00NzBhLWJkMzEtNzg3MGI5N2IyODM5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MiwibmJmIjoxNzM2NjE1NzY2LCJjc3JmIjoiNDllN2ZkYTUtYjY3MS00ZjRkLWExY2YtZmIyNGRmOTU0YWVmIiwiZXhwIjoxNzM2NjE2NjY2fQ.qofQBylGuzH4_PNz58zQa-__0DVCxCsWENDg3IZabss'
  const config = {'Authorization': `Bearer ${token}`}
  // todo Определяем функцию fetchData на уровне компонента
  const CpuData = async () => {
    try{
        const cpu = await axios.get('http://93.157.248.178:4666/user/systeminfo/CPU',
        {headers:config})
        const jsonData = await cpu.data
        console.log(token)
         //todo график

          const newDataPoint = {
            name: new Date().toLocaleTimeString(), // Добавляем временную метку
            CPU: jsonData.CPU[1][0], // данные парсятся
        };
        setData(prevData => [...prevData, newDataPoint]);
        setLoading(false);
    } catch (error) {
        console.error(error)
        setLoading(false)
        setError(error.message)
    }
    
  }
  // async function fetchData() {
  //   try {
  //       const responseCPU = await fetch(`http://93.157.248.178:${port}/user/systeminfo/CPU`);
  //       if (!responseCPU.ok) {
  //         throw new Error('Сеть не отвечает');
  //       }
  //         const jsonData = await responseCPU.json()
  //         // console.log(jsonData)
  //         const newDataPoint = {
  //           name: new Date().toLocaleTimeString(), // Добавляем временную метку
  //           CPU: jsonData.CPU[1][0], // данные парсятся
  //       };

  //       setData(prevData => [...prevData, newDataPoint]); //берёт текущий data создаёт новый массив в котором есть старые точки и добовляет к ним новые
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };


    useEffect(() => {
    const intervalId = setInterval(() => {
      CpuData() // Первоначальный вызов
    }, 10000); // Периодический вызов
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