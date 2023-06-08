import './App.css';
import bkg from './images/bg-pattern.svg';
import Header from './Components/Header';
import Card from './Components/Card';
import Check from './Components/Check';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <div className="grid-xl">
        <img src={bkg} alt="" className="bg-image" />
        <Header/>
        <div className="card">
        <Card/>
        <Check/>
        </div>
      </div>
    </div>
  );
}

export default App;
