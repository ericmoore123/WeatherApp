import React from 'react';

export class Search extends React.Component{

    state = {
        city: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.city === ""){
            alert("Please enter location before submitting!")
        }else{
            this.props.searchWeather(this.state.city)
        };
    };

    onChange = (e) => {
        this.setState({ city: e.target.value }); //uses "text" as name field from HTML
    };

    render() {
        return (
            <div className="weather-form-container">
                <form onSubmit={this.onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="city name here..."
                    value={this.state.city}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="submit"
                />
                </form>
            </div>
        );
    };
};

export default Search;
