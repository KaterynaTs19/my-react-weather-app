import React, { useState } from "react";
import axios from "axios";
import WeatherParameters from "./WeatherParameters";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
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
            <hr />
          </form>
        </div>
        <WeatherParameters data={weatherData} />
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
