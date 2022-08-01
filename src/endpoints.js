import React from 'react'
import config from './config';

function getWeatherByCoordinates(coordinates){
    return(
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${config.API_KEY}`)
    .then(response => response.json()))
}
function getCoordinatesByZipcode  (zipCode)  {
    console.log(`invoked!`)
    return (
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${config.API_KEY}`)
    .then(response => response.json())
    )
}

export {getWeatherByCoordinates, getCoordinatesByZipcode}
