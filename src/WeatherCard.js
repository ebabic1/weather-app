import React from "react";

const WeatherCard = ({ weatherData }) => (
  <>
    <h3 className="weather-title">{weatherData?.name}</h3>
    <div className="temperature-wrapper">
      <div>
        <h5>Temperature:</h5>
        <p>{Math.round(weatherData?.main.temp)}&deg;C</p>
      </div>
      <div>
        <h5>Feels like:</h5>
        <p>{Math.round(weatherData?.main.feels_like)}&deg;C</p>
      </div>
    </div>
    <p className="weather">{weatherData?.weather[0].main}</p>
    <img
      src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
      alt="weather icon"
    ></img>
    <div>
      <p>
        Humidity:<b>{weatherData?.main.humidity}%</b>
      </p>
    </div>
  </>
);
export default WeatherCard;
