import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '9c1be2db37134491550135710dfa0d33';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
             q: query,
            units: 'metric',
            APPID: API_KEY,
            // lat:22.57,
            // lon:88.36,
      
        }
    });

    return data;
}