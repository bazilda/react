import React from 'react';
import './App.css';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/login';
import { Logout } from './components/Logout';

function App() {

  return <div style={{display: 'flex', alignItems: 'center',
   flexDirection: 'column'}}>
    <Login />
    <Logout />
    <CounterUpdater operand={3}/>
    <CounterMultiply factor={2}/>
    <CounterSquare/>
    </div>
}

export default App;
