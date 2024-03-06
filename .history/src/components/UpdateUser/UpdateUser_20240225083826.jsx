import React from 'react'
import InputTexto from '../inputs/InputTexto'
import InputPass from '../inputs/InputPass';
import BotonAcceso from '../botones/BotonAceptar';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

function UpdateUser() {
  return (
    <>
    <div>
      <div className="register__container">
        <div className="register__form">

          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto Icono={<FaUser />} Placeholder="User Name" />
            </div>
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto Icono={<FaAddressCard />} Placeholder="Cedula" />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass Icono={<FaKey />} Placeholder="Password" />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass Icono={<FaKey />} Placeholder="Repetir Password" />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <Select Icono={<FaRegMap />} Options={opciones}></Select>
            </div>
          </div>



          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso Icono={<FaAlignCenter />} NombreBoton='Registrarse' />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default UpdateUser