import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col">
        <h1 className="City">{props.data.city}</h1>
        <h4 className="FormatDate">
          <FormattedDate date={props.data.date} />
        </h4>
      </div>
      <div className="col-6">
        <div className="Weather-container d-flex">
          <div className="DisplayIcon">
            <WeatherIcon code={props.data.icon} size={89} />
          </div>
          <div className="DisplayTemp">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <ul className="list">
        <li>{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}