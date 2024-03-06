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
      const response = await fetch('/ruta/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ruta: TextoInput }),
      });

      if (response.ok) {
        alert('Ruta guardada exitosamente');
        limpiarCampos();
        // Realizar otras acciones después de guardar la ruta, si es necesario
      } else {
        alert('Error al guardar la ruta');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al procesar la solicitud. Por favor, intenta nuevamente más tarde.');
    }
    
  };

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


