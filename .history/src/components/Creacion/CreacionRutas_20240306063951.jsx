import React, { useState } from 'react';
import InputTexto from '../inputs/InputTexto';
import BotonAceptar from '../botones/BotonAceptar';
import { FaRegSave, FaMapSigns } from 'react-icons/fa';
import './creacionRutas.css';

function CreacionRutas() {
  const [TextoInput, setTextoInput] = useState('');

  const limpiarCampos=()=>{
    setTextoInput('');
  }


  return (
    <>
      <div className="contenedor__creacion">
        <div className="titulo__creacion">
          <h2>Creación</h2>
        </div>
        <div className="input__creacion">
          <InputTexto
            Icono={<FaMapSigns />}
            Placeholder="Nueva Ruta"
            TextoInput={TextoInput}
            setTextoInput={setTextoInput}
          />
        </div>
        <div className="boton__creacion">
          <BotonAceptar Icono={<FaRegSave />} NombreBoton="Guardar" onClick={handleGuardar} />
        </div>
      </div>
    </>
  );
}

export default CreacionRutas;


