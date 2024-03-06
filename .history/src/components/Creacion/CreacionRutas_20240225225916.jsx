import React from 'react'
import InputTexto from '../inputs/InputTexto'
import BotonAceptar from '../botones/BotonAceptar'
import { FaRegSave } from "react-icons/fa";
import './creacionRutas.css'

function CreacionRutas() {
  return (
    <>
    <div className="contendor__creacion">
        <div className="titulo__creacion">
            <h2>Creacion</h2>
        </div>
    <InputTexto/>
    <BotonAceptar Icono={<FaRegSave />} NombreBoton='Guardar'/>
    </div>
    </>
  )
}

export default CreacionRutas