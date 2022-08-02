import config from './config';

const W_API_BASE_URL = 'http://api.openweathermap.org';

function getWeatherByCoordinates(coordinates, lang="en",units="metric"){
    return(
    fetch(`${W_API_BASE_URL}/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${units}&lang=${lang}&appid=${config.API_KEY}`)
    .then(response => response.json()))
}
function getForecastByCoordinates(coordinates, lang="en",units="metric"){
    return(
    fetch(`${W_API_BASE_URL}/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${units}&lang=${lang}&appid=${config.API_KEY}`)
    .then(response => response.json()))
}
function getCoordinatesByZipcode  (zipCode)  {
    return (
    fetch(`${W_API_BASE_URL}/geo/1.0/zip?zip=${zipCode}&appid=${config.API_KEY}`)
    .then(response => response.json())
    )
}

//for the search component
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6acd3bff36msh4506175c93fa1f9p114dbcjsn780e3ab9eaa5',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const loadOptions = (inputValue) => {
        
    return fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
     )
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err))
}

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export {getWeatherByCoordinates, getCoordinatesByZipcode, getForecastByCoordinates}

