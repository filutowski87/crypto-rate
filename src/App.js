import logo from './bitcoin-btc-logo.svg';
import './App.css';
import Crypto from './Crypto';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crypto-Rate</h1>
      </header>
      <Crypto/>
    </div>
  );
}

export default App;
