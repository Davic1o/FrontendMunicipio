import React from 'react'
import InputTexto from '../components/inputs/InputTexto'
import './login.css'
import { FaUser } from "react-icons/fa";

function Login() {
  return (
    <div>
        <div className="login__container">
            <div className="login__form">
                <div className="form__userName">
                <div className="label__userrname">
                </div>
                <div className="input__username">
                <InputTexto/>
                
                </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Login