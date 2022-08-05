import React, { useState, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Weatherpage from "./Weatherpage";
import Search from "./Search";
import Favorites from "./Favorites";
import About from "./About";
import Sidebar from "./Sidebar";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./endpoints";
import CurrentWeather from "./SearchWeatherCard";
import { Header } from "./Header";

export const LanguageContext = createContext();

function App() {
  const [fetchCurrentWeather, setFetchCurrentWeather] = useState(null);
  const [fetchForecast, setFetchForecast] = useState(null);
  const [language, setLanguage] = useState("en");
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&language=${language}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    const fetchForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&language${language}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([fetchCurrentWeather, fetchForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setFetchCurrentWeather({ city: searchData.label, ...weatherResponse });
        setFetchForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(language);
  return (
    <div className="app">
      <LanguageContext.Provider value={language}>
        <BrowserRouter>
          <Sidebar setLanguage={setLanguage} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header title="Home" />
                  <Search onSearchChange={handleOnSearchChange} />
                  {fetchCurrentWeather && (
                    <CurrentWeather
                      forecast={fetchForecast}
                      data={fetchCurrentWeather}
                    />
                  )}
                </>
              }
            />
            <Route
              path="search"
              element={
                <>
                  <Weatherpage />
                </>
              }
            />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
