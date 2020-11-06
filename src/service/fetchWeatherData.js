import axios from 'axios';
const api={
    key:"9c1be2db37134491550135710dfa0d33",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
  }

  export const fetchWeather=async (query)=>
  {
      const {data}=axios.get(api.baseUrl,{
          params:{
              q:query,
              units:'metric',
              APPID:api.key
          }
      });

      return data;
  }

