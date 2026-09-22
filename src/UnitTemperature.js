import React from "react";
import "./UnitTemperature.css";

export default function UnitTemperature(props) {
  return (
    <div className="current-value">
      <span className="main-temperature">{Math.round(props.UnitTemp)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
