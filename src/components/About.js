import React from 'react'

function About()
{
    return(
        <div>
            <h1>About</h1>
            <p>This is a simple weather application built with React.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/create-react-app/">Create React App</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - We used Open Weather Map to search for weather data.
                </li>
                <li>
                    <a href="https://tailwindcss.com/">Tailwind CSS</a> - We used Tailwind CSS to style our application.
                </li>
                <li>
                    <a href="https://react-icons.github.io/react-icons/">React Icons</a> - We used React Icons for our icons.
                </li>
            </ul>
        </div>
    )
}
export default About