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
          {/* ... (tu contenido actual) */}
          <div className="acceso__menu" onClick={() => handleItemClick('todosUsuarios')}>
            Todos Los usuarios
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('todosUsuarios')}>
            Todos Los usuarios
          </div>
          {/* Agregar más elementos de menú según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default MenuAdministrador;
