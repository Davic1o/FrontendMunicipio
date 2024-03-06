import React from 'react'
import './botonCancelar.css'

function BotonAceptar({Icono,NombreBoton}) {
    const TextoBoton = NombreBoton;
  return (
    <>
    <div className="contenedorBotonCancelar">
        <div className="inf__botonCancelar">
            <div className="icono__botonCancelar">
                {Icono}
            </div>
            <div className="texto__botonCancelar">
                {TextoBoton}
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default BotonAceptar