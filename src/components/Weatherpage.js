import React, {useEffect, useState,} from 'react';
import Weathersettings from './Weathersettings';
import Weathercard from './Weathercard';
import {getForecastByCoordinates, getWeatherByCoordinates} from './endpoints';
import Forecastlist from './Forecastlist';


function Weatherpage(){
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [coordinates, setCoordinates] = useState([])
  
    useEffect(() =>
    {
        if(coordinates[0])
        {
            getWeatherByCoordinates(coordinates)
            .then(data => setWeather(data));
            getForecastByCoordinates(coordinates)
            .then(data => setForecast(data))
            .then(console.log('Forecast:',forecast))
        }
    }, [coordinates])


    return(
        <div className="flex relative content-center ml-16 h-screen">
            <div className="space-y-24 m-auto">
                <Weathersettings setCoordinates={setCoordinates}/> {
                Object.keys(weather)[0] ? 
                <Weathercard data={weather}/> 
                :
                <div className="w-fit m-auto p-1 animate-wiggle  ">
                    Enter a zip code to get started
                </div>}
            </div>
            <Forecastlist data={forecast}/>
        </div>
    )
}

export default Weatherpage;