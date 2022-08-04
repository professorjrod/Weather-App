import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { getCitysFromFavorites, postCityToFavorites } from "./endpoints";
import { deleteCity } from "./endpoints";
import { BsTrash } from "react-icons/bs";
function Weathercard({ data, id, favorite = false }) {
  const { temp, feels_like, humidity, pressure } = data.main;
  const { icon, description } = data.weather[0];
  const { speed } = data["wind"];
  const city = data.name;
  const cityName = city.split(",")[0];
  const handleClick = () => postCityToFavorites({ city: cityName, id: id });

  const handleDelete = () => {
    deleteCity(id).then((res) => res.json());
  };

  return (
    <div className="weather-zip">
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
        {favorite ? (
          <AiFillHeart className="hover:text-red-600" onClick={handleClick} />
        ) : (
          <BsTrash className="hover:text-red-600" onClick={handleDelete} />
        )}
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
