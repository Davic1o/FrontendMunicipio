import React from 'react';
import { Link } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import Select from '../../components/selects/Select'
import logo from '../../images/logoquito.png';

import './register.css';
import { FaUser,FaRegMap, FaKey, FaAlignCenter, FaAddressCard } from 'react-icons/fa';

function Register() {
  const opciones = ['Zona Norte','Zona Sur','Zona Centro' ]
  return (
    <div>
      <div className="register__container">
        <div className="register__form">
          <div className="logo__municipio">
            <img src={logo} alt="logo Quito" />
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto 
              Icono={<FaUser />} 
              Placeholder="User Name"
              TextoInput={TextoUsername}
              setTextoInput={setTextoUsername} />
            </div>
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto 
              Icono={<FaAddressCard />} 
              Placeholder="Cedula" 
              TextoInput={TextoCedula}
              setTextoInput={setTextoCedula}
               />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass 
              Icono={<FaKey />} 
              Placeholder="Password" 
              TextoInput={TextoPassword}
              setTextoInput={setTextoPassword} />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass 
              Icono={<FaKey />} 
              Placeholder="Repetir Password" 
              TextoInput={TextoConfPassword}
              setTextoInput={setTextoConfPassword} />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <Select Icono={<FaRegMap />} Options={opciones}></Select>
            </div>
          </div>

          <div className="form__register">
            <div className="text__register">
              ¿Ya tienes cuenta?
            </div>
            <div className="link__register">
              <Link to="/">
                Inicia Sesión
              </Link>
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
  );
}

export default Register;
