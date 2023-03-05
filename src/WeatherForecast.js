import React from "react";
import "./WeatherForecast.css";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mo</div>
          <WeatherIcon code="01d" maxWidth="63px" />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
