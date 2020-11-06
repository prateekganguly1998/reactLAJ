import React from 'react'

export default function WeatherCard({weather,location}) {
    return (
        <div className="city">
            <h3>{weather.dt_txt}</h3>
        <h2 className="city-name">
            <span>{location.name}</span>
            <sup>{location.country}</sup>
        </h2>
        <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
        </div>
        <div className="info">
            <img className="city-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
        </div>
    </div>
    )
}
