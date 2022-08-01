import React from 'react';
import Weatherpage from './Weatherpage';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  
  return (
    <div className="App">
        <Header />
        <SideBar />
        <Weatherpage />
    </div>
  );
}

export default App;
