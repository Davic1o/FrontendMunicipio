import React from 'react';
import './menuAdministrador.css';
import logo from '../../images/logoquito.png';

function MenuAdministrador({ onMenuClick }) {
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
          <div className="acceso__menu" onClick={() => handleItemClick('todosUsuarios')}>
            Usuarios Pendientes
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('UsuariosAceptados')}>
            Generar Coordinador
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('UsuariosRechazados')}>
            Usuarios Rechazados
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('UsuariosCoordinadores')}>
            Coordinadores 
          </div>

          {/* Agregar más elementos de menú según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default MenuAdministrador;
