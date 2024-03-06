import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MenuUsuario from '../../components/MenuUsaurio/MenuUsuario';  // Ajustado el nombre del componente
import EscogerRonda from '../../components/Calendario/EscogerRonda';

function Usuario() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <>
      <div className="contenedor__administrador">
        <div className="menu__Administrador">
          <MenuUsuario onMenuClick={handleMenuClick} />  {/* Pasar la prop onMenuClick */}
        </div>
        <div className="administrador__navbar">
          <Navbar />
          <div className="tablas__informativas">
            {opcionSeleccionada === 'Rondas' && <EscogerRonda />}
            {/* ... Otras opciones de renderizado según sea necesario */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Usuario;
