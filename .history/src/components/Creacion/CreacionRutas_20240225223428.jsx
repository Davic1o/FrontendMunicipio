import React from 'react'
import ImputTexto from '../inputs/InputTexto'
import BotonAceptar from '../botones/BotonAceptar'
import { FaRegSave } from "react-icons/fa";

function CreacionRutas() {
  return (
    <>
    <InputTexto/>
    <BotonAceptar Icono={<FaRegSave />} NombreBoton='Guardar'/>
    </>
  )
}

export default CreacionRutas