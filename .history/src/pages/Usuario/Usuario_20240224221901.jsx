import React from 'react'

function Usuario() {
  return (
    <>
    <div className="contenedor__administrador">
      <div className="menu__Administrador">
        <MenuAdministrador onMenuClick={handleMenuClick} />
      </div>
      <div className="administrador__navbar">
        <Navbar />
        <div className="tablas__informativas">
          {/* Renderizar la tabla según la opción seleccionada */}
          {opcionSeleccionada && <TablaOpciones datos={datosEjemplo[opcionSeleccionada]} />}
          {opcionSeleccionada && <Tabla datos={datosDos[opcionSeleccionada]} />}
          </div>
      </div>
    </div>
  </>
  )
}

export default Usuario