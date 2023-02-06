import React from "react";
import CurrentDate from "./CurrentData";
import WeatherIcon from "./WeatherIcon";

export default function WeatherParameters(props) {
  return (
    <div className="weather-parameters">
      <div className="city text-center">
        <p className="city-current-updated mb-3">
          <CurrentDate date={props.data.date} />
        </p>
        <h1 className="h1">
          {props.data.city},{props.data.country}
        </h1>
        <p className="precipitation">overcast clouds</p>
        <div className="row">
          <div className="col-3 weather-icon-current">
            <WeatherIcon
              code={props.data.iconCode}
              alt={props.data.description}
            />
          </div>
          <div className="col-6 city-current">
            <div className="city-current-temperature">
              <span className="value-max">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units-max">°C</span>
              <span className="separator">|</span>
              <span className="value-min">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units units-min">°C</span>
            </div>
          </div>
          <div className="col-3 city-parameters">
            <ul className="list-unstyled conditions">
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Humidity: {Math.round(props.data.humidity)} %</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
