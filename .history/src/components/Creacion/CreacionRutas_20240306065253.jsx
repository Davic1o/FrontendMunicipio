import React, { useState } from 'react';
import InputTexto from '../inputs/InputTexto';
import BotonAceptar from '../botones/BotonAceptar';
import { FaRegSave, FaMapSigns } from 'react-icons/fa';
import registerSector from '../../api/SectorApi';
import './creacionRutas.css';

function CreacionRutas( {idzona}) {
  const [valoresCamposTexto, setValoresCamposTexto] = useState({
    sector: '',
  });
  
  const handleRegistro = async () => {

    try {
      // Realizar la solicitud POST al backend con los valores de los campos de texto
      await registerSector(valoresCamposTexto, idzona);

     } catch (error) {
      console.error('Error al registrar usuario:', error.message);
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
            TextoInput={valoresCamposTexto.sector}
            setTextoInput={(valor) => handleInputChange('sector', valor)}
          />
        </div>
        <div className="boton__creacion">
          <BotonAceptar Icono={<FaRegSave />} NombreBoton="Guardar" onClick={handleRegistro} />
        </div>
      </div>
    </>
  );
}

export default CreacionRutas;


