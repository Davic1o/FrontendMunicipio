import React from 'react'
import InputTexto from '../components/inputs/InputTexto'
import InputPass from '../components/inputs/InputPass'
import './login.css'
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

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
                
            </div>
        </div>

    </div>
  )
}

export default Login