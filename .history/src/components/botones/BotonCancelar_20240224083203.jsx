import React from 'react'
import './botonAcceso.css'

function BotonAceptar({Icono,NombreBoton}) {
    const TextoBoton = NombreBoton;
  return (
    <>
    <div className="contenedorBotonAcceso">
        <div className="inf__botonAcceso">
            <div className="icono__botonAcceso">
                {Icono}
            </div>
            <div className="texto__botonAcceso">
                {TextoBoton}
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default BotonAceptar