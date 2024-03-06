import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MenuUsuario from '../../components/MenuUsaurio/MenuUsuario';
import EscogerRonda from '../../components/Calendario/EscogerRonda';


function Usuario() {
  return (
    <>
    <div className="contenedor__administrador">
      <div className="menu__Administrador">
        <MenuUsuario/>
        </div>
      <div className="administrador__navbar">
        <Navbar />
        <div className="tablas__informativas">
        {opcionSeleccionada && <EscogerRonda/>}
          </div>
      </div>
    </div>
  </>
  )
}

export default Usuario