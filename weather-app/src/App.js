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
    await axios.get(`https://api.weatherapi.com/v1/current.json?key=6931aa59f8694c7e856230530211803&q=${location}&aqi=yes`)
    .then((res) => {
      this.setState({
            loading: false,
            weather: res.data.current,
            location: res.data.location
          });
    }).catch((error) => {
      alert("Location Data Not Available!");
      this.setState( function(prevState) {
        return{
          loading: prevState.loading,
          weather: prevState.weather,
          location: prevState.location
        }
      });
    })    
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
