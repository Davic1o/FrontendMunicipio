import React from 'react'
import '/botonAcceso.css'

function BotonAcceso({NombreBoton}) {
    const TextoBoton = NombreBoton;
  return (
    <>
    <div className="contenedorBotonAcceso">
        <div className="inf__botonAcceso">
            <div className="icono__botonAcceso">

            </div>
            <div className="texto__botonAcceso">
                {TextoBoton}
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default BotonAcceso