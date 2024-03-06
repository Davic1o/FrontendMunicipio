import React, { useState, useEffect } from 'react';
import InputTexto from '../inputs/InputTexto';
import BotonAceptar from '../botones/BotonAceptar';
import { FaRegSave, FaMapSigns } from 'react-icons/fa';
import registerSector from '../../api/SectorApi';
import './creacionRutas.css';

function CreacionRutas({ idzona }) {
  const [valoresCamposTexto, setValoresCamposTexto] = useState({
    sector: '',
  });

  useEffect(() => {
    return () => {
      // Cleanup si es necesario al desmontar el componente
    };
  }, []);

  const handleInputChange = (campo, valor) => {
    setValoresCamposTexto((prevValores) => ({
      ...prevValores,
      [campo]: valor,
    }));
  };

  const handleRegistro = async () => {
    try {
      // Realizar la solicitud POST al backend con los valores de los campos de texto
      await registerSector(valoresCamposTexto, idzona);

      // La solicitud fue exitosa
      alert('Ruta guardada exitosamente');

      // Realizar otras acciones después de guardar la ruta, si es necesario
    } catch (error) {
      console.error('Error al registrar ruta:', error.message);
      alert('Error al guardar la ruta');
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
          TextoInput={valoresCamposTexto.sector}
          setTextoInput={(valor) => handleInputChange('sector', valor)}
        />
      </div>
      <div className="boton__creacion">
        <BotonAceptar Icono={<FaRegSave />} NombreBoton="Guardar" onClick={handleRegistro} />
      </div>
    </div>
  );
}

export default CreacionRutas;




