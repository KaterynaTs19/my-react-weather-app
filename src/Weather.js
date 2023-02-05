import React from "react";
import "./Weather.css";
export default function Weather() {
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
                current
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
        <h1 className="h1">Kharkiv, UA</h1>
        <p className="precipitation">overcast clouds</p>
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
              <span className="units-max">°C</span>
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
      <hr />
    </div>
  );
}
