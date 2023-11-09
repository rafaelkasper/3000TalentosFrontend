import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: -51.1472,
      lat: -29.7603,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    base: "stations",
    main: {
      temp: 20.05,
      feels_like: 20.23,
      temp_min: 19.06,
      temp_max: 20.97,
      pressure: 1015,
      humidity: 81,
    },
    visibility: 10000,
    wind: {
      speed: 2.44,
      deg: 119,
      gust: 7.61,
    },
    clouds: {
      all: 100,
    },
    dt: 1699572001,
    sys: {
      type: 2,
      id: 2020383,
      country: "BR",
      sunrise: 1699518275,
      sunset: 1699566736,
    },
    timezone: -10800,
    id: 3448622,
    name: "São Leopoldo",
    cod: 200,
  });

  const apiKey = "";

  const handleSubmit = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt-br`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(url);
    setCity("");
  };

  return (
    <>
      {!weatherData && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite a cidade..."
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      )}
      {weatherData !== null && (
        <div>
          <h6>Tempo agora em </h6>
          <p>{weatherData.name}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            width="50"
          />
          <p>Temperatura atual: {weatherData.main.temp}º</p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Sensação térmica: {weatherData.main.feels_like}</p>
          <p>Temperatura mínima: {weatherData.main.temp_min}</p>
          <p>Temperatura máxima{weatherData.main.temp_max}</p>
        </div>
      )}
    </>
  );
};

export default Weather;
