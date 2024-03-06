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

  const handleGuardar = async () => {
    try {
      // Realizar la solicitud a la API para guardar la nueva ruta
      const response = await fetch('http://localhost:3001/ruta/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ TextoInput }),
      });

      if (response.ok) {
        alert('Ruta guardada exitosamente');
        // Realizar otras acciones después de guardar la ruta, si es necesario
      } else {
        alert('Error al guardar la ruta');
      }
    } catch (error) {
      alert('Error en la solicitud: ' + error.message);
    }
  };

  return (
    <>
      <div className="contendor__creacion">
        <div className="titulo__creacion">
          <h2>Creación</h2>
        </div>
        <div className="input__creacion">
          <InputTexto
            Icono={<FaMapSigns />}
            Placeholder="Nueva Ruta"
            TextoInput={TextoInput}
            setTextoInput={setTextoInput}
            onChange={(e) => setNuevaRuta(e.target.value)}
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


