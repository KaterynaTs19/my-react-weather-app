import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-section mb-3">
          <form>
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
                />
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-secondary w-100">
                  search
                </button>
              </div>
            </div>
          </form>
          <hr />
        </div>
        <div className="city text-center">
          <p className="city-current-updated mb-3">
            Last update: Monday, 13:55 PM
          </p>
          <h1 className="h1">{weatherData.city}</h1>
          <p className="precipitation">overcast clouds</p>
          <div className="row">
            <div className="col-3 weather-icon-current">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="img-icon"
              />
            </div>
            <div className="col-6 city-current">
              <div className="city-current-temperature">
                <span className="value-max">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units-max">°C</span>
                <span className="separator">|</span>
                <span className="value-min">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units units-min">°C</span>
              </div>
            </div>
            <div className="col-3 city-parameters">
              <ul className="list-unstyled conditions">
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                <li>Humidity: {Math.round(weatherData.humidity)} %</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "62231151ce343c4d68652e1617efc22f";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
