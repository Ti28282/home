import axios from "axios";
import React, {useState, useEffect, createContext, children} from "react";
import './WeatherCss/Sunvis.css'
import { useAuth } from '../../AuthContext'

const BackgroundProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useAuth();
    const port = 4666

    const WeatherData = async () => {
        try{
            const weather = await axios.get(`http://93.157.248.178:${port}/user/weather`, {
            headers: { 
                'Authorization': `Bearer ${token}` 
            }
            });
            const data = weather.data
            console.log(weather)
            setWeatherData(data)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setError(error.message)
        }
    }
    // const fetchWeatherData = async () => {
    //     try {
    //         const response = await fetch(`http://93.157.248.178:${port}/user/weather`);
    //         if (!response.ok) {
    //             throw new Error('Ошибка сети');
    //         }
    //         const data = await response.json();
    //         setWeatherData(data);
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        WeatherData(); // Первоначальный вызов
        const intervalId = setInterval(() => {
            WeatherData(); // Периодический вызов
        }, 300000); // Обновление каждые 60 секунд 
        return () => clearInterval(intervalId); // Очистка
    }, []); // Пустой массив зависимостей, чтобы выполнить только один раз

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    function formatTime(timeStamp) {
        return new Date(timeStamp * 1000).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
    }

    const sunrise = formatTime(weatherData.sys.sunrise);
    const sunset = formatTime(weatherData.sys.sunset);
    const now = new Date();

    const getBackgroundClass = () => {
        if (now >= sunrise && now < sunset) {
            return 'container_weather_day'; // Дневной фон
        } else {
            return 'container_weather_night'; // Ночной фон
        }
    };
    return (
        <div className={getBackgroundClass()}>
            {children}
        </div>
    )
}

export default BackgroundProvider;