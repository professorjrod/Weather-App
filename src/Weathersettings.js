import React, {useState} from 'react'
import config from './config';

function Weathersettings(props)
{
    const [zipCode, setZipCode] = useState('')

    const handleSearch = (e) => {
       setZipCode(zip => zip=(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(zipCode) {
        getCoordinatesByZipcode();
        }
    }

    const getCoordinatesByZipcode = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${config.API_KEY}`)
        .then(response => response.json())
        .then(data => props.setCoordinates([data.lat, data.lon]))
    }

    return(
        <div>
            <label>Zip code:</label>
            <input type="text" value={zipCode} onChange={handleSearch}></input>
            <button onClick={handleSubmit}>Submit Zip</button>
        </div>
    )
}
export default Weathersettings;