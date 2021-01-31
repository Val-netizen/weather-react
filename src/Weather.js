import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Loader from 'react-loader-spinner';

export default function Weather() {
  let [city, setCity] = useState(null);
  let [time, setTime] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayTime(response) {
    if (city.length > 0) {
      setTime(
        <ul>
          <li>City: {response.data.name}</li>
          <li>Temperature:{Math.round(response.data.main.temp)} °C</li>
          <li>Description: {response.data.weather[0].main}</li>
          <li>Humidity: {response.data.main.humidity} %</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
          <li>
            {" "}
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather-icon"
              width="100"
            />{" "}
          </li>
        </ul>
      );
    } else {
      alert("Please, enter a city");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4818761c04ded58b3835bb3810566f23&units=metric`;
    axios.get(url).then(displayTime);
  }

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      {time}
    </div>
  );
}
