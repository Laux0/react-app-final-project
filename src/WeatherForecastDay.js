import React from "react";
import axios from "axios";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.time * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{days[day]}</div>
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
