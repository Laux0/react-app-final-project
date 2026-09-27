import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="rainy weather icon"
            />
          </div>
          <div className="Forecast-temperatures">
            <span className="Forecast-max-temperature">19° </span>
            <span className="Forecast-min-temperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
