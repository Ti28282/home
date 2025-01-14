// const fetchWeatherData = async () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const port = 4666

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
// export default fetchWeatherData()
