import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {
  const [rgb, setRGB] = useState(['red','green','blue']);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes rgb={rgb} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
