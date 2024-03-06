import React from 'react'
import InputTexto from '../inputs/InputTexto'
import BotonAceptar from '../botones/BotonAceptar'
import { FaRegSave,FaMapSigns} from "react-icons/fa";

import './creacionRutas.css'

function CreacionRutas() {
  return (
    <>
    <div className="contendor__creacion">
        <div className="titulo__creacion">
            <h2>Creacion</h2>
        </div>
        <div className="input__creacion">
    <InputTexto Icono={<FaMapSigns />} Placeholder="Nueva Ruta" />
        </div>
        <div className="boton__creacion">
    <BotonAceptar Icono={<FaRegSave />} NombreBoton='Guardar'/>
        </div>
    </div>
    </>
  )
}

export default CreacionRutas