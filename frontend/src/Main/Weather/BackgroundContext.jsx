import React, {useState, useEffect, createContext, Children} from "react";
import './WeatherCss/Sunvis.css'

const BackgroundProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const port = 4666

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`http://93.157.248.178:${port}/user/weather`);
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