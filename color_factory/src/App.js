import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
