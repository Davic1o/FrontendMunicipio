import React from 'react';
import './inputTexto.css';

function InputTexto({ Icono, Placeholder, setTextoInput, TextoInput}) {
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
              placeholder={Placeholder} 
              value={TextoInput}
              
              onChange={(e) => setTextoInput(e.target.value)} // Usar directamente el valor de Placeholder
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputTexto;
