import React from 'react';
import {Edad} from "./Edad";

const mascota = ({name, age, show}) => {
  return (
    <div>
        <h3 className="Mascota">Soy una mascota y me llamo{props.name}</h3>
        <Edad  edad={age} show={show} />
      
    </div>
  )
}

export default mascota
