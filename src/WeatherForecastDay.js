import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecastDay(props) {
  function setTempMax() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }

  function setTempMin() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }

  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mo", "Tue", "Wed", "Thu", "Fr", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day mb-3">{forecastDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} maxWidth="43px" />
      <div className="WeatherForecast-temp mt-3">
        <span className="WeatherForecast-temp-max me-2">{setTempMax()} </span>
        <span className="WeatherForecast-temp-min">{setTempMin()}</span>
      </div>
    </div>
  );
}
