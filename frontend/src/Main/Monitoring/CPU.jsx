import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


export default function CPU() {
  const [data, setData] = useState(null);
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
      const jsonData = await responseCPU.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData(); // первоначальный вызов
    const intervalId = setInterval(fetchData, 3000); // периодический вызов
    return () => clearInterval(intervalId); // очистка при размонтировании
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  const cpuData = data.CPU.flatMap((usage, index) => {
    return usage.map((cpuValue, subIndex) => ({
      name: `${index + 1}.${subIndex + 1}`,
      CPU: cpuValue // предполагается, что это значение CPU
    }));
  });

  return (
    <div>
          {cpuData.length > 0 && (
            <LineChart width={450} height={275} data={cpuData}>
              <Line type="monotone" dataKey="CPU" stroke="#9370DB" strokeWidth={3} />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#fff" />
              <Tooltip />
            </LineChart>
          )}

    </div>
  );
}