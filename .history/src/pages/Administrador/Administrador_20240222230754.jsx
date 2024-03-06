import React, { useState } from 'react';
import './administracion.css';
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';
import Tabla from '../../components/MenuAdministrador/Tabla/Tabla';

function Administrador() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const datosEjemplo = {
    todosUsuarios: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
      { Nombre: 'Pedro', Edad: 22, Ciudad: 'Valencia', Ciudada: 'Barcelona' },
    ],
    // Otros conjuntos de datos según las opciones del menú
  };

  return (
    <>
      <div className="contenedor__administrador">
        <div className="menu__Administrador">
          <MenuAdministrador onMenuClick={handleMenuClick} />
        </div>
        <div className="administrador__navbar">
          <Navbar />
          <div className="tablas__informativas">
            {/* Renderizar la tabla según la opción seleccionada */}
            {opcionSeleccionada && <Tabla datos={datosEjemplo[opcionSeleccionada]} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Administrador;
