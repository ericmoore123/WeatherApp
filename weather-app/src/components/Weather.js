import React, { Component } from 'react';

class Weather extends Component {

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

        return (
            <div className="container">
                <div className="weather-content">
                    <div className="icon-container">
                    <img src="https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting" alt="current weather icon" />
                </div>
                    <div className="info-below">
                        <div className="loc">
                            <span className="left-labels">Location</span>
                            <p>{name}  {region} {country}</p>
                        </div>
                        <div className="time">
                            <span className="left-labels">Time</span>
                            <p>{localtime}</p>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="right-item">
                            <span className="labels">Temperature</span>
                            <p>{temperature}</p>
                        </div>
                        <div className="right-item">
                            <span className="labels">Feels Like</span>
                            <p>{feelslike}</p>
                        </div>
                        <div className="right-item">
                            <span className="labels">Humidity</span>
                            <p>{humidity}</p>
                        </div>
                        <div className="right-item">
                            <span className="labels">Pressure</span>
                            <p>{pressure}</p>
                        </div>
                        <div className="right-item">
                            <span className="labels">Wind Direction</span>
                            {wind_dir}
                        </div>
                        <div className="right-item">
                            <span className="labels">Wind Speed</span>
                            <p>{wind_speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;

