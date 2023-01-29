import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-secondary">
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
            <button type="button" className="btn btn-primary">
              current
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="city text-center">
        <p className="city-current-updated">Last update: Monday, 13:55 PM</p>
        <h1 className="h1">Kharkiv</h1>
        <p className="precipitation">Cloudly</p>
        <div className="row">
          <div className="col-3 weather-icon-current">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudly"
              className="img-icon"
            />
          </div>
          <div className="col-6 city-current">
            <div className="city-current-temperature">
              <span className="value-max">25</span>
              <span className="units">°C</span>
              <span className="separator">|</span>
              <span className="value-min">19</span>
              <span className="units units-min">°C</span>
            </div>
          </div>
          <div className="col-3 city-parameters">
            <ul className="list-unstyled conditions">
              <li>Wind: 7 km/h</li>
              <li>Humidity: 80 %</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
