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
            // <div className="weather-container">
            //     <div className="weather-data-container">
            //         {this.checkIcon(temperature, precip, cloudcover, name, country, region)}
            //         <div className="weather-data">
            //             <div className="time">
            //                 {localtime}
            //             </div>
            //             <div className="weather">
            //                 <div>{temperature}</div>
            //                 <div>{wind_speed} {wind_dir}</div>
            //                 <div>{feelslike}</div>
            //                 <div>{visibility}</div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div class="container">
                <div class="weather-content">
                    <div class="icon-container">
                    <img src="https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting" alt="current weather icon" />
                </div>
                    <div class="info-below">
                        <div class="loc">{name + ", " + region + ", " + country}</div>
                        <div class="time">{localtime}</div>
                    </div>
                    <div class="info-right">
        <div class="right-item">{temperature}</div>
                        <div class="right-item">{feelslike}</div>
                        <div class="right-item">{humidity}</div>
                        <div class="right-item">{pressure}</div>
                        <div class="right-item">{wind_dir}</div>
                        <div class="right-item">{wind_speed}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;

