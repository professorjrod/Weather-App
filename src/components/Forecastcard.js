import React from "react";
import "../weathercard.css";
export default function Forecastcard({ day, data }) {
  let timestamps = [];
  for (let i = 0; i < data.length; i++) {
    const date = new Date(data[i].dt_txt);
    timestamps.push(date.toLocaleString().split(" "));
  }

  return (
    <div className="forecast shadow-sm">
      <div className="pt-5">
        <div className="top">
          <div>
            <p className="description">{day}</p>
          </div>
        </div>
        <div>
          <ul>
            {data.map((item, index) => {
              const { temp } = item.main;
              const icon = item.weather[0].icon;
              const currentWeather = item.weather[0].main;
              const time =
                timestamps[index][1].split(":")[0] + " " + timestamps[index][2];
              return (
                <li className="pt-4">
                  {
                    <img
                      alt="weather"
                      className="w-4 h-4 float-left"
                      src={`weather-icons/${icon}.png`}
                    />
                  }
                  <p>
                    {time} {currentWeather} {Math.round(temp)}°
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
