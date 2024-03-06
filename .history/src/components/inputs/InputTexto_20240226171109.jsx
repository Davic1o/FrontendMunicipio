import React from 'react';
import './inputTexto.css';

function InputTexto({ Icono, Placeholder}) {
  return (
    <>
      <div className="contenedor__inputTexto">
        <div className="inf__inputTexto">
          <div className="icono__inputTexto">
            {Icono}
          </div>
          <div className="campo__inputTexto">
            <input
              type="text"
              className='inputTexto'
              placeholder={Placeholder}  // Usar directamente el valor de Placeholder
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputTexto;
