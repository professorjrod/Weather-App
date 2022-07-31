import React, {useEffect, useState} from 'react';
import Weathersettings from './Weathersettings';
import config from './config';
function Weatherpage(){
    const [weather, setWeather] = useState({});
    const [coordinates, setCoordinates] = useState('')

    const getWeatherByCoordinates = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${config.API_KEY}`)
        .then(response => response.json())
        .then(data => setWeather(weather => weather = data))
    }
    
    useEffect(() =>
    {
        if(coordinates && coordinates)
        {
            console.log('coords', coordinates)
            getWeatherByCoordinates();
        }
    },[coordinates])

    return(
        <div className="weatherContainer">
            <Weathersettings setCoordinates={setCoordinates}/>
            <h1>Api response:</h1>
            <p>{JSON.stringify(weather)}</p>
        </div>
    )
}
export default Weatherpage;