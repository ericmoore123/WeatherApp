import React, { Component } from 'react';

class Weather extends Component {
    
    checkIcon = (temperature, precip, cloudcover, name, country, region) => {
        if(precip >= 0){
            // console.log("Raining!")
            return (
                <div className="icon">
                    <img alt="sun icon" src="https://image.flaticon.com/icons/png/512/169/169367.png" />
                    <h2>{name}, {region}, {country}</h2>
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
                <div className="weather-data-container">
                    {this.checkIcon(temperature, precip, cloudcover, name, country, region)}
                    <div className="weather-data">
                        <div className="time">
                            {localtime}
                        </div>
                        <div className="weather">
                            <div>{temperature}</div>
                            <div>{wind_speed} {wind_dir}</div>
                            <div>{feelslike}</div>
                            <div>{visibility}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;

