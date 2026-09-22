import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function ForecastInfo(props) {
  return (
    <div className="Forecast">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="today-icon"
          />
          <span className="main-temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Weather Details</strong>:
            </li>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
