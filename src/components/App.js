import React, { Fragment, useState } from 'react';
import {Routes, Route, Outlet, BrowserRouter} from 'react-router-dom';
import Weatherpage from './Weatherpage';
import Search from './Search';
import Favorites from './Favorites';
import About from './About';
import Sidebar from './Sidebar';
import { WEATHER_API_KEY, WEATHER_API_URL } from './endpoints';
import CurrentWeather from './SearchWeatherCard';

function App() {

  const [fetchCurrentWeather, setFetchCurrentWeather] = useState(null)
  const [fetchForecast, setFetchForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const fetchCurrentWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    const fetchForecast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    Promise.all([fetchCurrentWeather, fetchForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setFetchCurrentWeather({ city: searchData.label, ...weatherResponse})
        setFetchForecast({ city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }

  console.log(fetchCurrentWeather)
  console.log(fetchForecast)
  
  return (
      <>
      <BrowserRouter>
        <Sidebar /> 
        <Routes>
          <Route path="/" element={<><Search onSearchChange={handleOnSearchChange} />{fetchCurrentWeather && <CurrentWeather data={fetchCurrentWeather}/>}</>}/>
          <Route path="search" element={<><Weatherpage /></>}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
