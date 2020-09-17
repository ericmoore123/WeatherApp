import React from 'react';
import Search from './components/Search.js';
import Weather from './components/Weather.js';
import axios from 'axios';
import "./App.css";

class App extends React.Component {
  
  state = {
    weather: {},
    location: {},
    loading: false
  };

  getWeather = async (location) => {
    this.setState({
      loading: true
    });
    // Axios Call
    // const res = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_AUTH}&query=${location}`);
    const res = await axios.get(`http://api.weatherstack.com/current?access_key=bfb88d0821cbf07d25fcafe2a1c29918&query=${location}`);
    // console.log(res.data)
    
    this.setState({
      loading: false,
      weather: res.data.current,
      location: res.data.location
    });
    console.log(this.state.weather)
    // console.log(this.state.location)
  }

  render(){ 
      return (
        <React.Fragment>
          <div className="app">
            <Search searchWeather={this.getWeather} clearSearch={this.clearSearch} loading={this.state.loading}/>
            <Weather weather={this.state.weather} location={this.state.location} loading={this.state.loading}/>
          </div>
        </React.Fragment>
      );
    }
}

export default App;
