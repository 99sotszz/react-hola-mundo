import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/mascota';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name Name="Luis" age="30"  show={true} />
    <Mascota name="solovino" age = {8} show={true} />
    <Name Name="Pax" age={31} show={false}/>
    <Name Name="Miriam" age={24} show={false}/>
  </React.StrictMode>
);


