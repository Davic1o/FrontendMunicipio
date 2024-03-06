import React from 'react'
import InputTexto from '../components/inputs/InputTexto'
import InputPass from '../components/inputs/InputPass'
import BotonAcceso from '../components/botones/BotonAcceso'

import './login.css'
import { FaUser, FaKey  } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";

function Login() {
  return (
    <div>
        <div className="login__container">
            <div className="login__form">
                <div className="form__userName">
                <div className="label__userName">
                </div>
                <div className="input__userName">
                <InputTexto Icono={<FaUser/>} Placeholder="User Name"/>
                </div>
                </div>
                <div className="form__userPass">
                <div className="label__userPass">
                </div>
                <div className="input__userPass">
                <InputPass Icono={<FaKey />} Placeholder="Password"/>
                </div>
                </div>

                <div className="form__register">
                <div className="text__register">
                No tienes cuenta
                <div className="link__register">Registrate</div> 
                </div>
                </div>

                <div className="form__acept">
                    <div className="button__acept">
                        <BotonAcceso Icono={<RiLoginCircleLine />}/>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Login