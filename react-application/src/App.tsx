import React from 'react';
import { InputTest } from './components/InputTest';
import './App.css';
import {Timer} from './components/Timer';
function App() {
  const column: React.CSSProperties = {display: "flex", flexDirection: "column",
  height: "90vh", justifyContent: "center", background: "blue"};
  const row: React.CSSProperties = {display: "flex", flexDirection: "row",
   justifyContent: "space-around", background:"blue",color:"white"};
  return <div style={column}>
    <div style={row}>
    <InputTest/>
       <Timer cityCountry='Israel'/>
    <Timer cityCountry='Sydney'/>
    </div>
   <div style={row}>
    <Timer cityCountry='Mexico'/>
    <Timer cityCountry='Chicago'/>
   </div>
   </div>
}

export default App;
