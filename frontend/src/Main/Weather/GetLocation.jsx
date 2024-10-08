import React from "react";
import axios from "axios";

const getLocationData = async (lat, lon) => {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error)
        return null
    }
}

export default getLocationData