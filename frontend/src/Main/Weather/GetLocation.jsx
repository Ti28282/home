import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'a58dc440a3dc425884c1d59650650a13';

const GetLocationData = () => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
            
          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
            );
            const results = response.data.results;
            if (results.length > 0) {
              setCity(results[0].components.city || results[0].components.town || results[0].components.village || 'Город не найден');
              console.log(city)
            } else {
              setCity('Город не найден');
            }
          } catch (err) {
            setError('Ошибка при получении данных о городе.');
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Геолокация не поддерживается вашим браузером.");
    }
  }, [API_KEY]);

  return(
    <>
        <p>{city}</p>
    </>
  )
}

export default GetLocationData;