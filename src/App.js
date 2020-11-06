import React, { Component } from 'react'
import {fetchWeather} from './service/fetchWeatherData';
import WeatherCard from './WeatherCard';
import './App.css'
export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            items:[],
            query:'',
            weather:{}
        }
        this.search=this.search.bind(this);
    }
   async search(e)
    {
        if(e.key==='Enter')
        {
            const data=await fetchWeather(this.state.query);
            console.log(data);
            this.setState({weather:data});
        }
        this.forceUpdate();
        
    }
    
    componentDidUpdate()
    {
        if(this.state.weather.list)
        {
            for(let i=0;i<this.state.weather.list.length;i=i+8)
            {
                this.state.items.push(<WeatherCard weather={this.state.weather.list[i]} location={this.state.weather.city}/>)
            }
            console.log(this.state.items);
           
        }
     
       
    }
    
    render() {
        
        return (
            <div className="main-container">
                 <input type="text"className="search"placeholder="Search..."value={this.state.query}onChange={(e) => this.setState({query:e.target.value})}onKeyPress={this.search}/>
                <div style={{display:"flex"}}>
                    {this.state.items}
                </div>
            </div>
        )
    }
}
