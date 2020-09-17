import React from 'react';

export class Search extends React.Component{

    state = {
        city: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchWeather(this.state.city)
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
                    placeholder="Search"
                    value={this.state.city}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Search"
                />
                </form>
            </div>
        );
    };
};

export default Search;
