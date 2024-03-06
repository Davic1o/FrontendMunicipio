import React from 'react'
import InputTexto from '../inputs/InputTexto'
import InputPass from '../inputs/InputPass';
import BotonAcceso from '../botones/BotonAceptar';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';
import './UpdateUser.css'

function UpdateUser() {
  return (
    <>
    <div className="contenedor__update">
      
    <div className="input__userName">
              <InputTexto Icono={<FaUser />} Placeholder="User Name" />
            </div> 
            <div className="input__userPass">
              <InputPass Icono={<FaKey />} Placeholder="Password" />
            </div>
            <div className="input__userPass">
              <InputPass Icono={<FaKey />} Placeholder="Password" />
            </div>
            <div className="button__acept">
              <BotonAcceso Icono={<RiLoginCircleLine />} NombreBoton='Ingresar' />
            </div>

    </div>
    
    </>
  )
}

export default UpdateUser