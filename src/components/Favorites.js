import React, {useState} from 'react'
import {getCitysFromFavorites, getWeatherByCity} from './endpoints'
import Weathercard from './Weathercard'
function Favorites()
{
    const [citys, setCitys] = React.useState([])
    const [citysWeather, setCitysWeather] = React.useState([])

    React.useEffect(() => {
        getCitysFromFavorites().then(citys => setCitys(citys))
        return () => {
            setCitys([])
        }
    }, []) 

    React.useEffect(() => {
        for(let i = 0; i < citys.length; i++){
            getWeatherByCity(citys[i].city)
            .then(weather => setCitysWeather(citysWeather => [...citysWeather, weather]))
        }
        return () => {
            setCitysWeather([])
        }
    }, [citys])

   
    console.log(citysWeather)

    return(
        <div className="flex flex-initial flex-wrap m-auto">
            <h1>Favorites</h1>
               {citysWeather.map(weather => weather.main ? <Weathercard data={weather}/> : <h1>{console.log(weather.message)}</h1>)}
        </div>

    )
}
export default Favorites;