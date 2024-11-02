import './Monitoring.css'
import React from 'react';
import CPU from './CPU';
import Ethernet from './Ethernet';
import RAM from './RAM'

export default function Monitoring() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const port = 4666;

  // Определяем функцию fetchData на уровне компонента
  // async function fetchData() {
  //   try {
  //     const responseCPU = await fetch(`http://93.157.248.178:${port}/user/systeminfo/CPU`);
  //     if (!responseCPU.ok) {
  //       throw new Error('Сеть не отвечает');
  //     }
  //     const jsonData = await responseCPU.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchData(); // первоначальный вызов
  //   const intervalId = setInterval(fetchData, 1500); // периодический вызов
  //   return () => clearInterval(intervalId); // очистка при размонтировании
  // }, []);

  // if (loading) return <div>Загрузка...</div>;
  // if (error) return <div>Ошибка: {error}</div>;

  // const cpuData = data.CPU.map((usage, index) => ({
  //   name: `Точка ${index + 1}`,
  //   CPU: usage[0] // предполагается, что это значение CPU
  // }));
  
  // const downloadSpeed = [{ 
  //   name: 'Скорость загрузки',
  //   Download: data.SPEEDTEST.DOWNLOAD,
  //   Upload: data.SPEEDTEST.UPLOAD
  // }]; // предполагается, что это одно значение

  return (
    <div>
      <div id="container_monitoring">
        <h1>Мониторинг</h1>
        <div className="cpu_ethernet_memory">
          <p className="text_cem">CPU</p>
            <CPU/>
          <p className="text_cem">Ethernet</p>
            <Ethernet/>
          <p className="text_cem">RAM</p>
            <RAM/>
        </div>
      </div>
    </div>
  );
}