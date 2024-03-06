import React from 'react';
import Tabla from '../Tabla/Tabla';

function Asistencias({datos}) {


  const datosEjemplo = datos;


  return (
    <>
      <Tabla datos={datosEjemplo} />
    </>
  );
}

export default Asistencias;
