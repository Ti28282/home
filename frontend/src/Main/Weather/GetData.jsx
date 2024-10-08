import React from "react";
import axios from "axios";

// const apiKey = '3041b9d7a4f212c7efdfce6d19568757';

const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=55.86936569213867&lon=49.097412109375&appid=3041b9d7a4f212c7efdfce6d19568757&units=metric`)
        console.log(lat, lon)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getWeather