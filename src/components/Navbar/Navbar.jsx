import React, { useState } from 'react';
import escudo from '../../images/escudo.png';
import { FaCircleUser } from 'react-icons/fa6';
import './navbar.css';

function Navbar() {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  return (
    <>
      <nav className="contenedor__navbar">
        <div className="imagen__navbar">
          <img src={escudo} alt="" className="imagen__escudo" />
        </div>
        <div className="menu__navbar" onClick={toggleSubmenu}>
          <div className="icono__navbar">
            <FaCircleUser className="icono__user" />
          </div>
          <div className="datos__navbar">Hola, Carlos David</div>
        </div>

        {submenuVisible && (
          <div className="submenu">
            {/* Contenido del submenu */}
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              {/* Agrega más elementos según sea necesario */}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
