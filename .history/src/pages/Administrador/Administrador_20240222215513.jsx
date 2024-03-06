import React from 'react'
import './administracion.css'
import Navbar from '../../components/Navbar/Navbar'
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador'

function Administrador() {
  return (
    <>
    <div className="contenedor__administrador">

      <div className="menu__Administrador">
        <MenuAdministrador/>
      </div>
      <div className="administrador__navbar">

    <Navbar/>
    <div className="tablas__informativas"><table></table></div>
      </div>

    </div>
    
    </>
  )
}

export default Administrador