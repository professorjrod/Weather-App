import React from 'react'
import "../weathercard.css"
export default function Forecastcard({day, data}){

    let timestamps = [];
    for(let i = 0; i < data.length; i++){
        const date = new Date(data[i].dt_txt)
        timestamps.push(date.toLocaleString().split(' '))
    }

    
    return(
        <div className="forecast w-42">
        <div className="top">
        <div>
            <p className="description">{day}</p>
        </div>
        </div>
        <div>
                    <ul>
            {data.map((item, index) => {
                const {temp} = item.main
                const icon = item.weather[0].icon;
                const currentWeather = item.weather[0].main
                const time = timestamps[index][1].split(":")[0] + ":" + timestamps[index][1].split(':')[1]+ " " + timestamps[index][2]
                return(
                    <li className="pt-4">
                    <p>{<img alt="weather" className="w-4 h-4 float-left" src={`weather-icons/${icon}.png`} />}{time}{" "}{currentWeather}{" "}{Math.round(temp)}°</p>
                    </li>  
                )
            })}
           </ul>
          </div>
    </div>
    
    )
}



{/* <div className="details">
<div className="parameter-row">
    <span className="parameter-label">Details</span>
</div>
<div className="parameter-row">
    <span className="parameter-label">Feels</span>
    <span className="parameter-value">{Math.round(feels_like)}°</span>
</div>
<div className="parameter-row">
    <span className="parameter-label">Wind</span>
    <span className="parameter-value">{speed} m/s</span>
</div>
<div className="parameter-row">
    <span className="parameter-label">Humidity</span>
    <span className="parameter-value">{humidity}%</span>
</div>
<div className="parameter-row">
    <span className="parameter-label">Pressure</span>
    <span className="parameter-value">{pressure} hPa</span>
</div>
</div> */}