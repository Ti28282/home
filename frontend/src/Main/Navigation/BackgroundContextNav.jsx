import React, {useState, useEffect, createContext, Children} from "react";
import './SunvisNav.css'
import { ADDRESS } from "../Config";

const BackgroundProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${ADDRESS}/user/weather`, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData(); // Первоначальный вызов
        const intervalId = setInterval(() => {
            fetchWeatherData(); // Периодический вызов
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
            return '.container_nav_day'; // Дневной фон
        } else {
            return 'container_nav_night'; // Ночной фон
        }
    };
    return (
        <div className={getBackgroundClass()}>
            {children}
        </div>
    )
}

export default BackgroundProvider;