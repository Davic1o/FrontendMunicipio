import React from 'react'
import logo from '../../images/logoquito.png';

// En el componente MenuUsuario
function MenuUsuario({ onMenuClick }) {
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
            <div className="acceso__menu" onClick={() => handleItemClick('Asistencias')}>
              Actualizar Datos
            </div>
            <div className="acceso__menu" onClick={() => handleItemClick('Asistencias')}>
              Asistencias
            </div>
            <div className="acceso__menu" onClick={() => handleItemClick('Rondas')}>
              Rondas
            </div>
            {/* Agregar más elementos de menú según sea necesario */}
          </div>
        </div>
      </div>
    );
  }
  
  export default MenuUsuario;
  
