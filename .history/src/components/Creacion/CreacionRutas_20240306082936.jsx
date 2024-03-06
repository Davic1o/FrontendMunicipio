import React, { useState } from 'react';
import InputTexto from '../inputs/InputTexto';
import BotonAceptar from '../botones/BotonAceptar';
import { FaRegSave, FaMapSigns } from 'react-icons/fa';
import SectorApi from '../../api/SectorApi';
import './creacionRutas.css';

function CreacionRutas({idzona}) {
  const [nombreRuta, setNombreRuta] = useState('');

  const handleGuardarRuta = async () => { // Asegúrate de que handleGuardarRuta sea async si estás usando await en la llamada a crearSector
    if (nombreRuta.trim() !== '') {
      try {
        // Llama a la función crearSector de SectorApi pasando los argumentos necesarios
        await SectorApi().crearSector(nombreRuta, idzona);
        // Puedes realizar otras acciones aquí si es necesario
        console.log(`Ruta "${nombreRuta}" guardada`);
      } catch (error) {
        console.error('Error al guardar la ruta:', error.message);
        // Puedes manejar el error de acuerdo a tus necesidades
      }
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




