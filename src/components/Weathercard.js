import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { postCityToFavorites } from "./endpoints";
function Weathercard({ data }) {
  const { temp, feels_like, humidity, pressure } = data.main;
  const { icon, description } = data.weather[0];
  const { speed } = data["wind"];
  const city = data.name;

  const handleClick = () => postCityToFavorites(city.split(",")[0]);

  return (
    <div className="weather-zip align-center">
      <div className="top-zip">
        <div>
          <p className="city">{city}</p>
          <p className="description">{description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`weather-icons/${icon}.png`}
        />
        <AiFillHeart className="hover:text-red-600" onClick={handleClick} />
      </div>

      <div className="bottom-zip">
        <p className="temp">{Math.round(temp)}°</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels</span>
            <span className="parameter-value">{Math.round(feels_like)}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weathercard;
