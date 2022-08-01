import React from 'react';
import Weatherpage from './Weatherpage';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Weatherpage />
    </div>
  );
}

export default App;
