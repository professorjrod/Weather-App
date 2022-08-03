import React from 'react';

function Weathercard({data}){
    const {temp, feels_like, humidity,pressure} = data.main
    const {icon, description} = data.weather[0]
    const {lat, lon} = data['coord']
    const {speed} = data['wind']
    const {country} = data['sys']
    const city = data.name
    const weatherImages = {
        sunnyImage: "https://pics.freeartbackgrounds.com/Sky_with_Sun_Background-1481.jpg",
        cloudyImage:  "https://wallpaperaccess.com/full/1244071.jpg",
        rainyImage: "http://wallpaperset.com/w/full/9/8/d/18507.jpg"
    }
    

    return(
        <div className="forecast">
        <div className="top">
            <div>
                <p className="city">{city}</p>
                <p className="description">{description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`weather-icons/${icon}.png`} />
        </div>

        <div className="bottom">
            <p className="temp">{Math.round(temp)}°</p>
            <div className="details">
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
            </div>
        </div>
    </div>
    )
}
export default Weathercard;