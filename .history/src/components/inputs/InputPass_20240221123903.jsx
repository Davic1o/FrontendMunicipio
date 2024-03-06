import React, { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import './inputPass.css';

function InputPass({ Icono, Placeholder }) {
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false);
  const TipoInput = mostrarContrasenia ? 'text' : 'password';

  return (
    <>
      <div className="contenedor__inputPass">
        <div className="inf__inputPass">
          <div className="icono__inputPass">{Icono}</div>
          <div className="campo__inputPass">
            <input
              type={TipoInput}
              className="inputPass"
              placeholder={Placeholder}
            />
            <div
              className="vista__inputPass"
              onClick={() => setMostrarContrasenia(!mostrarContrasenia)}
            >
              <AiFillEye />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputPass;
