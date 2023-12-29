import { useState } from "react";

const API_KEY = '2f5adc0a2c126d3cad6a224c330d7d47';
const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState('');

  const handleSubmit = async () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search.trim()}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      if (!data || data.cod === '404') {
        alert('Country/city not found');
        return;
      }else{
        setWeatherData(data);
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  const mainWeather = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main;
  const description = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description;
  const humidity = weatherData.main && weatherData.main.humidity;
  const temperatureCelsius = weatherData.main && weatherData.main.temp;
  const feelsLikeCelsius = weatherData.main && weatherData.main.feels_like;

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl p-10">Weather</h1>
        <div className="flex flex-col">
          <input
            className="bg-gray-100 text-center p-0 sm:pl-20 sm:p-5 sm:pr-20 m-10 focus:bg-slate-700 rounded-xl focus:text-white"
            type="text"
            name="search"
            id=""
            placeholder="Introduce the city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-slate-800 p-2 m-10 mt-0 text-white rounded-xl hover:bg-slate-400 hover:text-slate-800"
            type="submit" onClick={handleSubmit}>Search</button>
        </div>
        <div>
          {weatherData && weatherData.weather && weatherData.main &&(
            <div className="m-5">
              {
                console.log(weatherData)
              }
              <div className="pb-10">
                <h1 className="text-3xl pb-10">{`${weatherData.name} | ${weatherData.sys && weatherData.sys.country}`}</h1>
                <h2 className="text-lg text-left pb-5">{`Weather: ${mainWeather} | ${description}`}</h2>
                <h3 className="text-lg text-left">{`Humidity: ${humidity !== undefined ? humidity + ' %' : 'N/A'}`}</h3>
                <h3 className="text-lg text-left">{`Temp: ${temperatureCelsius !== undefined ? Math.round(temperatureCelsius - 273.15) + ' °C' : 'N/A'}`}</h3>
                <h3 className="text-lg text-left">{`Feels like: ${feelsLikeCelsius !== undefined ? Math.round(feelsLikeCelsius - 273.15) + ' °C' : 'N/A'}`}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
