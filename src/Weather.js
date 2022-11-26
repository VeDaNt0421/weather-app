import React, { Component } from 'react'
import './Weather.css'
export class Weather extends Component {
    state = {
        city: '',
        temperature: '',
        realfeel: '',
        high: '',
        low: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let city = e.target.city.value
        this.setState({
            city: city
        })
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+"&units=imperial&appid=f38586183921984933be3e24f85e4166")
        .then(res => res.json())
        .then(data => this.setState({
            temperature: data.main.temp,
            realfeel: data.main.feels_like,
            high: data.main.temp_max,
            low: data.main.temp_min
        }))
    }
    render() {
        return (
            <div className="wrapper">
              <h1>Weather app</h1>
              <h3>Access current weather data for any location on Earth including over 200,000 cities!
                Current weather is frequently updated based on global models and data from more than 40,000 weather stations.</h3>  
              
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Enter your city" id="city" name="city"/>
                  <br />
                  <button>Submit</button>
              </form>
              <div className="result">
                  <h1>Results for Today's Weather in your City</h1>
                  <p>Temperature: {this.state.temperature}&deg;F</p>
                  <p>Real Feel: {this.state.realfeel}&deg;F</p>
                  <p>High: {this.state.high}&deg;F</p>
                  <p>Low: {this.state.low}&deg;F</p>
              </div>
              <a href="https://openweathermap.org/">API Source</a>
            </div>
        )
    }
}

export default Weather