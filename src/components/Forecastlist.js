import React from "react";
import Forecastcard from "./Forecastcard";

export default function Forecastlist({ data }) {
  const { name, country, timezone } = data.city;

  let forecast = {};

  const formatForecastData = (data) => {
    for (let i = 0; i < 5; i++) {
      const date = new Date(data.list[i * 8].dt * 1000);
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const calendarDate = date.getDate();
      const year = date.getFullYear();
      const month = months[date.getMonth()];
      const day =
        weekday[date.getDay()] + `, ${month} ${calendarDate}, ${year}`;
      forecast[day] = [];

      for (let n = 0; n < 8; n++) {
        forecast[day].push(data.list[i * 8 + n]);
      }
    }
  };

  formatForecastData(data);

  return (
    <div className="forecastList grid items-center justify-center gap-4">
      {Object.keys(forecast).map((day) => (
        <Forecastcard key={day} day={day} data={forecast[day]} />
      ))}
    </div>
  );
}
