import "../weathercard.css"
import Forecastlist from "./Forecastlist"

const CurrentWeather = ({data, forecast}) => {
    const {city} = data
    const {temp, feels_like, humidity, pressure} = data.main
    const {description, icon} = data.weather[0]
    const {speed} = data.wind

    return (
        <>
        <div className="weather">
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
        {Object.keys(data)[0] ? <Forecastlist data={forecast} /> : null }
        </>
    )
}

export default CurrentWeather