import React from 'react'
import InputTexto from '../components/inputs/InputTexto'
import InputPass from '../components/inputs/InputPass'
import BotonAcceso from '../components/botones/BotonAcceso'
import logo from '../images/logoquito.png'

import './register.css'
import { FaUser, FaKey  } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";

function Register() {
  return (
    <div>
        <div className="Register__container">
            <div className="Register__form">
            <div className="logo__municipio">
                <img src={logo} alt="logo Quito" />
            </div>
                <div className="form form__RegisterName">
                <div className="input__RegisterName">
                <InputTexto Icono={<FaUser/>} Placeholder="Register Name"/>
                </div>
                </div>
                <div className="form form__RegisterName">
                <div className="input__RegisterName">
                <InputTexto Icono={<FaUser/>} Placeholder="Cedula"/>
                </div>
                </div>
                <div className="form form__RegisterPass">
                <div className="input__RegisterPass">
                <InputPass Icono={<FaKey />} Placeholder="Password"/>
                </div>
                </div>
                <div className="form form__RegisterPass">
                <div className="input__RegisterPass">
                <InputPass Icono={<FaKey />} Placeholder="Repetir Password"/>
                </div>
                </div>

                <div className="form__register">
                <div className="text__register">
                    Ya tienes cuenta 
                </div>
                <div className="link__register">
                    Inicia Sescion 
                </div> 
                </div>

                <div className="form form__acept">
                    <div className="button__acept">
                        <BotonAcceso Icono={<RiRegisterCircleLine />} NombreBoton='Registrarse'/>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Register