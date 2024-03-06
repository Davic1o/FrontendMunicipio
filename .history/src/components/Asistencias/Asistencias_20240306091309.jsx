import React from 'react';
import TablaAsistencia from '../Tabla/TablaAsistencia';

function Asistencias({datos}) {


  const datosEjemplo = datos;


  return (
    <>
      <TablaAsistencia datos={datosEjemplo} />
    </>
  );
}

export default Asistencias;
