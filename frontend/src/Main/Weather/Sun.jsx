export const getBackgroundClass = (now, sunrise, sunset) => {
    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);

    if (now >= sunriseDate && now < sunsetDate) {
        return 'container_weather_day'; // Дневной фон
    } else {
        return 'container_weather_night'; // Ночной фон
    }
};