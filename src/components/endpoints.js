import config from './config';

const W_API_BASE_URL = "http://api.openweathermap.org"

function getWeatherByCoordinates(coordinates){
    return(
    fetch(`${W_API_BASE_URL}/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=${config.API_KEY}`)
    .then(response => response.json()))
}

function getCoordinatesByZipcode  (zipCode)  {
    return (
    fetch(`${W_API_BASE_URL}/geo/1.0/zip?zip=${zipCode}&appid=${config.API_KEY}`)
    .then(response => response.json())
    )
}

export {getWeatherByCoordinates, getCoordinatesByZipcode}
