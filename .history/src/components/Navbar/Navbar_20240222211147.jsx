import React from 'react';
import escudo from '../../images/escudo.png';
import { FaCircleUser } from 'react-icons/fa6';
import './navbar.css';

function Navbar() {
  return (
    <>
      <nav className="contenedor__navbar">
        <div className="informacion__navbar">
          <div className="imagen__navbar">
            <img src={escudo} alt="" className="imagen__escudo" />
          </div>
          <div className="menu__navbar">
            <div className="icono__navbar">
              <FaCircleUser className='icono__user'/>
            </div>
            <div className="Datos__navbar">Carlos David</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
