import React from 'react'
import {getDataFromFavorites} from './endpoints'
import Weathercard from './Weathercard'
function Favorites()
{
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getDataFromFavorites().then(data => setData(data))
    }, [])

    console.log(data)
    return(
        <div className="flex flex-initial flex-wrap m-auto">
            <h1>Favorites</h1>
                {data.map(cityData => <Weathercard key={cityData.id} data={cityData}/>)}
        </div>

    )
}
export default Favorites;