import axios from "axios";
const key_api  = '3041b9d7a4f212c7efdfce6d19568757';
const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key_api}&units=metric&lang=ru`)
        console.log(lat, lon)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getWeather