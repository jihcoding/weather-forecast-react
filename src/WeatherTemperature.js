import React from "react";

import "./WeatherInfo.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">
        <span> °C </span>
      </span>
    </div>
  );
}