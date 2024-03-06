import React from 'react'
import './administracion.css'
import Navbar from '../../components/Navbar/Navbar'
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador'
import Tabla from '../../components/MenuAdministrador/Tabla/Tabla'

function Administrador() {
  const datosEjemplo = [
    { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudad: 'Barcelona' },
    { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudad: 'Barcelona' },
    { Nombre: 'Pedro', Edad: 22, Ciudad: 'Valencia', Ciudad: 'Barcelona' }
  ];
  return (
    <>
    <div className="contenedor__administrador">

      <div className="menu__Administrador">
        <MenuAdministrador/>
      </div>
      <div className="administrador__navbar">

    <Navbar/>
    <div className="tablas__informativas">
      <Tabla datos={datosEjemplo}/>
    </div>
      </div>

    </div>
    
    </>
  )
}

export default Administrador