import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';


function Usuario() {
  return (
    <>
    <div className="contenedor__administrador">
      <div className="menu__Administrador">
        </div>
      <div className="administrador__navbar">
        <Navbar />
        <div className="tablas__informativas">
          </div>
      </div>
    </div>
  </>
  )
}

export default Usuario