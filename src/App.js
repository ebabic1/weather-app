import "./App.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";

import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import InputComponent from "./InputComponent";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const handleChange = (event, value) => {
    setCity(value);
  };

  useEffect(() => {
    if (city) fetchWeatherData();
  }, [city]);

  const fetchWeatherData = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`
      );
      console.log(apiKey);
      if (result.status == 200) {
        setWeatherData(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <div className="title-wrapper">
        <h2>Weather App</h2>
        <ThermostatIcon />
      </div>
      <div className="App-header">
        <InputComponent handleChange={handleChange} city={city} />
        <div className="weather-wrapper">
          {weatherData ? (
            <WeatherCard weatherData={weatherData} />
          ) : (
            <h4>No data available</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
