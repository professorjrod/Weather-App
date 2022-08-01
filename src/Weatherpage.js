import React, {useEffect, useState} from 'react';
import Weathersettings from './Weathersettings';
import Sidebar from './Sidebar';
import {getWeatherByCoordinates} from './endpoints';

function Weatherpage(){
    const [weather, setWeather] = useState({});
    const [coordinates, setCoordinates] = useState([])

    const W_API_BASE_URL = "http://api.openweathermap.org"

    
    useEffect(() =>
    {
        if(coordinates)
        {
            getWeatherByCoordinates(coordinates)
            .then(data => setWeather(data))
        }
    },[coordinates])


    return(
        <>
        <div className="flex">
            <Sidebar />
        </div>
        <div className="weatherContainer">
            <Weathersettings setCoordinates={setCoordinates}/>
            <h1 className="">Api response:</h1>
            <p>{JSON.stringify(weather)}</p>
        </div>
        </>
    )
}
export default Weatherpage;