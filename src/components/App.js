import React from 'react';
import Weatherpage from './Weatherpage';
import Header from './Header';
import Search from './Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  
  return (
    <div className="App">
        <Header />
        <div className="search">
        <Search onSearchChange={handleOnSearchChange}/>
        </div>
        <Weatherpage />
    </div>
  );
}

export default App;
