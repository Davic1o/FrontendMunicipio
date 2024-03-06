import React from 'react'
import './updateUser.css'
import InputTexto from '../inputs/InputTexto'
import InputPass from '../inputs/InputPass';
import BotonAcceso from '../botones/BotonAceptar';
import { FaUser, FaKey, FaAlignCenter } from 'react-icons/fa';

function UpdateUser() {
  return (
    <>
    <div>

        <div className="update__form">

          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto Icono={<FaUser />} Placeholder=" Actualizar User Name" />
            </div>
          </div>

          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass Icono={<FaKey />} Placeholder=" Nueva Password" />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass Icono={<FaKey />} Placeholder="Repetir Nueva Password" />
            </div>
          </div>

          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso Icono={<FaAlignCenter />} NombreBoton='Actualizar' />
            </div>
          </div>
        </div>

    </div>
    
    </>
  )
}

export default UpdateUser