import React, { useState } from 'react'

export default function Weather({weather,location}) {
	const [hovered, setHovered] = useState({});
	const toggleClick = (e) => {
		setHovered(prevWeather=>
			({
				...prevWeather,[e]:!prevWeather[e]
			}))
		console.log(e);	
	};
	let items=[];
	for(let i=0;i<weather.length;i=i+8)
	{
		items.push(<div className="city"  key={weather[i].dt}>
		<h3 >{weather[i].dt_txt.split(' ')[0]}</h3>
	<h2 className="city-name">
		<span>{location.name}</span>
		<sup>{location.country}</sup>
	</h2>
	<div className="city-temp">
		{Math.round(weather[i].main.temp)}
		<sup>&deg;C</sup>
	</div>
	<div className="info" onClick={()=>toggleClick(weather[i].dt)}>
		{hovered[weather[i].dt]?<p style={{display:"flex",textAlign:"center"}}>
		<h5>Min Temp: {weather[i].main.temp_min}</h5>
		 <hr/>
		<h5>Max Temp: {weather[i].main.temp_max}</h5>
		</p>:<img className="city-icon" src={`http://openweathermap.org/img/wn/${weather[i].weather[0].icon}@2x.png`} alt={weather[i].weather[0].description} />}
		
		
	</div>
	<div className="info">
	<p>{weather[i].weather[0].description}</p>
	</div>
</div>)
	}
	return (
		<div className="main" style={{display:"flex"}}>
			{items}
		</div>
	)
}