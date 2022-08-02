import React, {useEffect, useState,} from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Weathersettings from './Weathersettings';
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
            <div className="pl-16 pt-2 ml-auto mr-auto">
                <Weathersettings setCoordinates={setCoordinates}/> {
                Object.keys(weather)[0] ? 
                <Weathercard data={weather}/> 
                :
                <div className="w-fit m-auto p-1 animate-bounce">
                    <BsFillArrowUpSquareFill/>
                </div>}
            </div>
        </div>
    )
}

export default Weatherpage;