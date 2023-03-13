import React from 'react';
//import logo from './logo.svg';

import './App.css';
import {Timer} from './components/Timer';
function App() {
const column:React.CSSProperties={display: "flex",flexDirection: "column"}
const row:React.CSSProperties={display: "flex",flexDirection: "row"}
  return <div>
    <div style={column} >
    <Timer  cityCountry='Israel'/>
    <Timer cityCountry='Sydney'/>
  </div>
  <div style={row} >
    <Timer cityCountry='Mexico'/>
    <Timer cityCountry='Chicago'/>
    </div>
    </div>
}

export default App;
