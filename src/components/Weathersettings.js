import React, {useState} from 'react'
import config from './config';
import {getCoordinatesByZipcode} from './endpoints';

function Weathersettings({setCoordinates})
{
    const [zipCode, setZipCode] = useState('')

    const handleSearch = (e) => {
       setZipCode(zip => zip=(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(zipCode) {
        getCoordinatesByZipcode(zipCode)
        .then(weather => setCoordinates([weather.lat,weather.lon]))
        }
    }

   

    return(
        <div className="weatherInput">
            <label>ZIP Code:</label>
            <input type="text" value={zipCode} onChange={handleSearch}></input>
            <button onClick={handleSubmit}>Submit ZIP</button>
        </div>
    )
}
export default Weathersettings;