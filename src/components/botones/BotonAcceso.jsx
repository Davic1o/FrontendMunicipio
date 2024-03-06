import React from 'react'
import './botonAcceso.css'

function BotonAcceso({Icono,NombreBoton, onClick }) {
    const TextoBoton = NombreBoton;
  return (
    <>
    <div className="contenedorBotonAcceso" onClick={onClick}>
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

export default BotonAcceso