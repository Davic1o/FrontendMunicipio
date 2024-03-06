import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MenuCoordinador from '../../components/MenuCoordinador/MenuCoordinador';

function Coordinador() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleMenuClick = (opcion) => {
      setOpcionSeleccionada(opcion);
    };
  return (
    <>
    <div className="contenedor__administrador">
      <div className="menu__Administrador">
      <MenuCoordinador onMenuClick={handleMenuClick} />
      </div>
      <div className="administrador__navbar">
        <Navbar />
        <div className="tablas__informativas">
          {/* Renderizar la tabla según la opción seleccionada */}
          {/*opcionSeleccionada && <TablaOpciones datos={datosEjemplo[opcionSeleccionada]} />}
          {opcionSeleccionada && <Tabla datos={datosDos[opcionSeleccionada]} />*/}
          </div>
      </div>
    </div>
  </>
  )
}

export default Coordinador