import React from 'react';
import {Routes, Route, Outlet, BrowserRouter} from 'react-router-dom';
import Weatherpage from './Weatherpage';
import Search from './Search';
import Favorites from './Favorites';
import About from './About';
import Sidebar from './Sidebar';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  
  return (
      <>
      <BrowserRouter>

        <Sidebar /> 
        <Routes>
          <Route path="/" element={<Weatherpage />}/>
          <Route path="search" element={<Search onSearchChange={handleOnSearchChange}/>}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
