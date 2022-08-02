import React from 'react'

export default function Forecastcard({day, data}){
    let timestamps = [];
    for(let i = 0; i < data.length; i++){
        const date = new Date(data[i].dt_txt)
        timestamps.push(date.toLocaleString().split(' '))
    }
    console.log(day)
    console.log(data)
    console.log(timestamps)
    return(
    <div className='forecastcard'>
        <ul>
            <li>{day}</li>
            {data.map((item, index) => {
                return(
                    <li key={index}>
                        <p>{timestamps[index][1]}
                        {timestamps[index][2]}
                        {item.weather[0].main}
                        {item.main.temp}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}