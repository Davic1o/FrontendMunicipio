import React from 'react';
import './menuCoordinador.css';
import logo from '../../images/logoquito.png';

function MenuCoordinador({ onMenuClick }) {
  const handleItemClick = (opcion) => {
    onMenuClick(opcion);
  };

  return (
    <div className="contenedor__menu">
      <div className="datos__menu">
        <div className="menu__informacion">
        <div className="imagen__menu">
                    <img src={logo} alt="" />
                </div>
          {/* ... (tu contenido actual) */}
          <div className="acceso__menu" onClick={() => handleItemClick('Creacion')}>
            Asignacion de Rutas
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('Asignacion')}>
            Asignacion de Rutas
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('Asistencias')}>
            Asistencias
          </div>

          {/* Agregar más elementos de menú según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default MenuCoordinador;
