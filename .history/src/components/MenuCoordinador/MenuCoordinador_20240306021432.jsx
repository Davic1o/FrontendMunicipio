import React from 'react';
import './menuCoordinador.css';
import logo from '../../images/logoquito.png';
import { useNavigate } from 'react-router-dom';

function MenuCoordinador({ onMenuClick }) {
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
          <div className="acceso__menu" onClick={() => handleItemClick('Creacion')}>
            Creacion de Rutas
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('Asignacion')}>
            Asignacion de Rutas
          </div>
          <div className="acceso__menu" onClick={() => handleItemClick('Asistencias')}>
            Asistencias
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

export default MenuCoordinador;
