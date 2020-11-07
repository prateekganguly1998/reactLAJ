import React from "react";

import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css'
const API_KEY = "9c1be2db37134491550135710dfa0d33";

class App extends React.Component {
  state = {
   weather:[],
   location:undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (city) {
     
        this.setState({
          weather:data.list,
          location:data.city
        });
     // console.log(this.state.weather);
    } else {
      this.setState({
        weather:undefined,
        location:undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div className="main-container">
         <Form getWeather={this.getWeather} />
                  <Weather 
                   weather={this.state.weather}
                   location={this.state.location}
                  />       
      </div>
    );
  }
};

export default App;