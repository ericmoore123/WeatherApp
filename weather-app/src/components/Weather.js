import React, { Component } from 'react';

class Weather extends Component {
    
    checkIcon = (temperature, precip, cloudcover, name) => {
        if(precip >= 0){
            // console.log("Raining!")
            return (
                <div className="icon">
                    <h2>{name}</h2>
                    <img alt="sun icon" src="https://image.flaticon.com/icons/png/512/169/169367.png" />
                </div>
            );
        }else if(cloudcover >= 0){
            // console.log("Cloudy!")
        }else if(temperature > 18){
            // console.log("Hot!")
        }else{

        }
    }

    render(props) {
        const {
            cloudcover,
            feelslike,
            humidity,
            is_day,
            observation_time,
            precip,
            pressure,
            temperature,
            uv_index,
            visibility,
            weather_code,
            weather_descriptions,
            weather_icons,
            wind_degree,
            wind_dir,
            wind_speed,
        } = this.props.weather;

        const {
            name,
            country,
            region,
            lat,
            lon,
            localtime,
        } = this.props.location;
        // console.log(props.location)
        return (
            <div className="weather-container">
                <div className="weather-icon-container">
                    {this.checkIcon(temperature, precip, cloudcover, name)}
                    <div className=""></div>
                </div>
            </div>
        )
    }
}

export default Weather;

