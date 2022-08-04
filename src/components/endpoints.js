import config from "./config";

const W_API_BASE_URL = "http://api.openweathermap.org";
const DB_API_BASE_URL = "http://localhost:3001";

function getWeatherByCoordinates(coordinates, lang = "en", units = "metric") {
  return fetch(
    `${W_API_BASE_URL}/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${units}&lang=${lang}&appid=${config.API_KEY}`
  ).then((response) => response.json());
}

function getForecastByCoordinates(coordinates, lang = "en", units = "metric") {
  return fetch(
    `${W_API_BASE_URL}/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${units}&lang=${lang}&appid=${config.API_KEY}`
  ).then((response) => response.json());
}

function getCoordinatesByZipcode(zipCode) {
  return fetch(
    `${W_API_BASE_URL}/geo/1.0/zip?zip=${zipCode}&appid=${config.API_KEY}`
  ).then((response) => response.json());
}

const getWeatherByCity = (city, units = "metric") =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${config.API_KEY}`
  ).then((res) => res.json());

function getCitysFromFavorites() {
  return fetch(`${DB_API_BASE_URL}/favorites`).then((response) =>
    response.json()
  );
}

function deleteCity(id) {
  fetch(`${DB_API_BASE_URL}/favorites/${id}`, {
    method: "DELETE",
  });
}
function postCityToFavorites(city) {
  fetch(`${DB_API_BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify(city),
  });
}

//for the search component
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6acd3bff36msh4506175c93fa1f9p114dbcjsn780e3ab9eaa5",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const loadOptions = (inputValue) => {
  return fetch(
    `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
    geoApiOptions
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    })
    .catch((err) => console.error(err));
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "290238ed16255a63322018b3f03c43ef";

export {
  getCitysFromFavorites,
  getWeatherByCoordinates,
  getCoordinatesByZipcode,
  getForecastByCoordinates,
  postCityToFavorites,
  getWeatherByCity,
  deleteCity,
};
