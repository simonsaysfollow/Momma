import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CakeDisplay from './CakeDisplay/CakeDisplay';
import AboutUs from './AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

      </header>
      <body>
        <div className="cake-display">
        <CakeDisplay />
        </div>
        <div className="about-us">
          <AboutUs />
        </div>
      </body>
    </div>
  );
}

export default App;
