import React, { useState } from "react";
import { getCitysFromFavorites, getWeatherByCity } from "./endpoints";
import Weathercard from "./Weathercard";
import { Header } from "./Header";
function Favorites() {
  const [citys, setCitys] = React.useState([]);
  const [citysWeather, setCitysWeather] = React.useState([]);

  React.useEffect(() => {
    getCitysFromFavorites().then((citys) => setCitys(citys));
    return () => {
      setCitys([]);
    };
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < citys.length; i++) {
      getWeatherByCity(citys[i].city).then((weather) =>
        setCitysWeather((citysWeather) => [...citysWeather, weather])
      );
    }
    return () => {
      setCitysWeather([]);
    };
  }, [citys]);

  return (
    <>
      <Header title="Favorites" />
      <div className="grid ml-24 mt-16 mb-16 mr-8 grid-cols-1 md:grid-cols-2 ">
        {citysWeather.map((weather) =>
          weather.main ? (
            <Weathercard data={weather} />
          ) : (
            console.log("no weather")
          )
        )}
      </div>
    </>
  );
}
export default Favorites;
