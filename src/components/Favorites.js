import React from 'react'

function Favoirtes(props)
{
    return(
        <div>
            <h1>Favorites</h1>
            <ul>
                {props.favorites.map(favorite => <li key={favorite.id}>{favorite.name}</li>)}
            </ul>
        </div>
    )
}