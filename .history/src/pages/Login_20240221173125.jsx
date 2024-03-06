import React from 'react'
import { FaUser } from "react-icons/fa";

function Login() {
  return (
    <div>
        <div className="login__container">
            <div className="login__form">
                <div className="label__userrname">
                <inputText Icono={<FaUser /> Placeholder='Username'}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login