import React from 'react';

function Weathercard({data}){
    const {temp, feels_like,} = data.main
    const {main, description} = data.weather[0]
    const {lat, lon} = data['coord']
    const {speed} = data['wind']
    const {country} = data['sys']
    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const city = data.name
    const weatherImages = {
    sunnyImage: "https://pics.freeartbackgrounds.com/Sky_with_Sun_Background-1481.jpg",
    cloudyImage:  "https://wallpaperaccess.com/full/1244071.jpg",
    rainyImage: "http://wallpaperset.com/w/full/9/8/d/18507.jpg"
    }
    
    console.log(data.weather)
    return(
        <div className="card h-fit min-w-fit">
            <img src={icon} alt="weatherIcon"/>
            <h1>Weather in {city}, {country}</h1>
            <h3>{main} - {description}</h3> 
            <h3>Temperature: {temp}°C</h3>
            <p>Feels like {feels_like}°C</p>
            <p>Current wind speed of {speed}</p>
            <p>Station latitude is {lat} and longitude is {lon}</p>
        </div>
    )
}
export default Weathercard;