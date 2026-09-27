import React from "react";
import axios from "axios";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{props.data.time}</div>
      <div className="Forecast-icon">
        <img src={props.data.condition.icon_url} alt="forecast icon" />
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-max-temperature">
          {Math.round(props.data.temperature.maximum)}°{" "}
        </span>
        <span className="Forecast-min-temperature">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
