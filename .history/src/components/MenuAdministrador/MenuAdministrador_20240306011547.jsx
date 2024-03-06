import React from 'react';
import './menuAdministrador.css';
import logo from '../../images/logoquito.png';
import { useNavigate } from 'react-router-dom';

function MenuAdministrador({ onMenuClick }) {
  const handleItemClick = (opcion) => {
    onMenuClick(opcion);
  };
  const  navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
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
          Usuarios Aceptados
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('UsuariosRechazados')}>
            Usuarios Rechazados
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('UsuariosCoordinadores')}>
            Coordinadores 
          </div>
          <div className="acceso__menu" onClick={logout}>
            Cerrar Session
          </div>

          {/* Agregar más elementos de menú según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default MenuAdministrador;
