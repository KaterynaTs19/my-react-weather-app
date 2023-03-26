import React, { useState } from "react";
import axios from "axios";
import WeatherParameters from "./WeatherParameters";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    // console.log(response.data.sys.country);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconCode: response.data.weather[0].icon,
      // `images/${response.data.weather[0].icon}.png`
      city: response.data.name,
      country: response.data.sys.country,
    });
  }
  function searchCity() {
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  // recieve the DAta with axios

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  // when we submit the form - call the function "serchCity()"

  function handleCityName(event) {
    setCity(event.target.value);
  }
  // updating the city state

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-section mb-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn btn-primary w-100">
                  current
                </button>
              </div>
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter city here..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityName}
                />
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-secondary w-100">
                  search
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherParameters data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return "loading...";
  }
}
