import React from 'react'
import escudo from '../../images/escudo.png'

function Navbar() {
  return (
    <>
    <nav className="contendor__navbar">
        <div className="informacion__usuario">
            <div className="icono__usuario">
                <img src={escudo} alt="" />
            </div>
            <div className="menu__usuario">
                <div className="icono__usuario">

                </div>
                <div className="Datos__usuario">
                    
                </div>
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar