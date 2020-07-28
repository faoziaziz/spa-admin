import React from 'react';
import logo from './logo.svg';
import './App.css';

/* for router screen */
import Beranda from './pages/Beranda'
import Login from './pages/Login'



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Beranda />
        <Login />
        <p>time hoer</p>
        
      </header>
    </div>
  );
}

export default App;
