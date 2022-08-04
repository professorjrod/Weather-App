import React from "react";

function About() {
  return (
    <div className="weather ml-16 h-fit mt-10">
      <div className="text-center">
        <h1 className="underline">About</h1>
        <p>This is a simple weather application built with React.</p>
        <p>Here are some of the tools we used:</p>
      </div>
      <ul className="list-disc mt-6">
        <li>
          <a href="https://facebook.github.io/create-react-app/">
            Create React App
          </a>
          <br />
          This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
          <br />
          We used Tailwind CSS to style our application.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map API</a>
          <br />
          We used Open Weather Map to search for weather data.
        </li>
        <li>
          <a href="https://react-icons.github.io/react-icons/">React Icons</a>
          <br />
          We used React Icons for our icons.
        </li>
      </ul>
    </div>
  );
}
export default About;
