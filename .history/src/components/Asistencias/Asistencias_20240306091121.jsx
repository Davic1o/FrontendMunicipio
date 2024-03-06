import React from 'react';
import TablaOpcion from '../Tabla/TablaOpcion';

function Asistencias({datos}) {


  const datosEjemplo = datos;


  return (
    <>
      <TablaOpcion datos={datosEjemplo} />
    </>
  );
}

export default Asistencias;
