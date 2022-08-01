import React from 'react';
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSunny, TiWeatherNight , TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherWindyCloudy, TiWeatherWindy} from 'react-icons/ti';
import { TiHome, TiInfoLarge, TiZoom } from 'react-icons/ti';

function Weathercard({data}){
    const {temp, feels_like, temp_min, temp_max} = data.main
    const {main, description} = data.weather[0]
    const {lat, lon} = data['coord']
    const {speed} = data['wind']
    const {country} = data['sys']
    const city = data.name

    return(
        <div>
            <h1>Weather in {city}, {country}</h1>
            <h3>{main} - {description}</h3> 
            <h3>Temperature: {temp}°C</h3>
            <h3>Feels like {feels_like}°C with a max of {temp_max} and a low of {temp_min}</h3>
            <p>Current wind speed of {speed}</p>
            <p>Station latitude is {lat} and longitude is {lon}</p>
        </div>
    )
}
export default Weathercard;