import React from 'react'
import './menuAdministrador.css'
import logo from '../../images/logoquito.png'

function MenuAdministrador() {
  return (
    <div className="contenedor__menu">
        <div className="datos__menu">
            <div className="menu__informacion">
            <div className="imagen__menu">
                    <img src={logo} alt="" />
                </div>
                <div className="acceso__menu">
                    Todos Los usuarios
                </div>
                <div className="acceso__menu">
                    Todos Los usuarios
                </div>
                <div className="acceso__menu">
                    Todos Los usuarios
                </div>
                <div className="acceso__menu">
                    Todos Los usuarios
                </div>
                <div className="acceso__menu">
                    Todos Los usuarios
                </div>
            </div>
        </div>

    </div>
  )
}

export default MenuAdministrador