import { ADDRESS, Token_Fetch_CONFIG } from "../Config";

const fetchWeatherData = async () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    try {
        const response = await fetch(`${ADDRESS}/user/weather`, Token_Fetch_CONFIG);
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
export default fetchWeatherData()