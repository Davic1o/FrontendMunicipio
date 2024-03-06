import React, { useState } from 'react';
import InputTexto from '../inputs/InputTexto';
import BotonAceptar from '../botones/BotonAceptar';
import { FaRegSave, FaMapSigns } from 'react-icons/fa';
import registerSector from '../../api/SectorApi';
import './creacionRutas.css';

function CreacionRutas({idzona}) {
  const [nombreRuta, setNombreRuta] = useState('');

  const handleGuardarRuta = () => {
    if (nombreRuta.trim() !== '') {
      // Llamar a la función registerSector con el nombre de la ruta
      registerSector(nombreRuta, idzona);
      // Puedes realizar otras acciones aquí si es necesario
      console.log(`Ruta "${nombreRuta}" guardada`);
    } else {
      console.error('Error: El nombre de la ruta no puede estar vacío');
      // Puedes manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <div className="contenedor__creacion">
      <div className="titulo__creacion">
        <h2>Creación</h2>
      </div>
      <div className="input__creacion">
        <InputTexto
          Icono={<FaMapSigns />}
          Placeholder="Nueva Ruta"
          TextoInput={nombreRuta}
          setTextoInput={setNombreRuta}
        />
      </div>
      <div className="boton__creacion">
        <BotonAceptar
          Icono={<FaRegSave />}
          NombreBoton="Guardar"
          onClick={handleGuardarRuta}
        />
      </div>
    </div>
  );
}

export default CreacionRutas;




