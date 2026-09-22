import React, { useState } from "react";
import "./UnitTemperature.css";

export default function UnitTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="current-value">
        <span className="main-temperature">{Math.round(props.UnitTemp)}</span>
        <span className="unit">
          °C |{" "}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.UnitTemp * 9) / 5 + 32;
    return (
      <div className="current-value">
        <span className="main-temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="#" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
