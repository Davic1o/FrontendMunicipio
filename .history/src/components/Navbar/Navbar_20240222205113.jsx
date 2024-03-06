import React from 'react'
import escudo from '../../images/escudo.png'
import './navbar.css'

function Navbar() {
  return (
    <>
    <nav className="contendor__navbar">
        <div className="informacion__navbar">
            <div className="imagen__navbar">
                <img src={escudo} alt="" className='imagen__escudo' />
            </div>
            <div className="menu__navbar">
                <div className="icono__navbar">

                </div>
                <div className="Datos__navbar">

                </div>
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar