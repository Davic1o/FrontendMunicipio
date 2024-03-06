import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './inputPass.css';

function InputPass({ Icono, Placeholder, setTextoInput, TextoInput }) {
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false);
  const TipoInput = mostrarContrasenia ? 'text' : 'password';
  const IconoVisualizacion = mostrarContrasenia ? (
    <AiFillEyeInvisible />
  ) : (
    <AiFillEye />
  );

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
              value={TextoInput}
              onChange={(e) => setTextoInput(e.target.value)}
            />
          </div>
          <div
            className="vista__inputPass"
            onClick={() => setMostrarContrasenia(!mostrarContrasenia)}
          >
            {IconoVisualizacion}
          </div>
        </div>
      </div>
    </>
  );
}

export default InputPass;
