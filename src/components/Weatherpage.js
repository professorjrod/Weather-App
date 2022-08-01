import React, {useEffect, useState} from 'react';
import Weathersettings from './Weathersettings';
import Sidebar from './Sidebar';
import Weathercard from './Weathercard';
import {getWeatherByCoordinates} from './endpoints';

function Weatherpage(){
    const [weather, setWeather] = useState({});
    const [coordinates, setCoordinates] = useState([])
  
    useEffect(() =>
    {
        if(coordinates[0])
        {
            getWeatherByCoordinates(coordinates)
            .then(data => setWeather(data))
        }
    }, [coordinates])


    return(
        <div className="flex">
                <Sidebar />
                <div className="pl-16 pt-2 ml-auto mr-auto">
                    <Weathersettings setCoordinates={setCoordinates}/>
                    {Object.keys(weather)[0] ? <Weathercard data={weather}/> : <div>Enter your zipcode</div>}
                </div>
        </div>
    )
}
export default Weatherpage;