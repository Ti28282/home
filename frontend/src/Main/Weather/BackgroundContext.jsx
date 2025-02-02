import React, {useState, useEffect, createContext, Children} from "react";
import '../Weather/WeatherCss/Sunvis.css'
import { ADDRESS } from "../Config";
import axios from "axios";

const BackgroundProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const WeatherData = async () => {
        try {
            await axios.get(`${ADDRESS}/user/weather`)
            .then((response) => { setWeatherData(response.data) })
        } catch(error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        WeatherData(); //* Первоначальный вызов
        const intervalId = setInterval(() => {
            WeatherData(); //* Периодический вызов
        }, 300000); //* Обновление каждые 60 секунд 
        return () => clearInterval(intervalId); //* Очистка
    }, []); //Todo Пустой массив зависимостей, чтобы выполнить только один раз

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
            return 'container_weather_day'; //* Дневной фон
        } else {
            return 'container_weather_night'; //* Ночной фон
        }
    };
    return (
        <div className={getBackgroundClass()}>
            {children}
        </div>
    )
}

export default BackgroundProvider;