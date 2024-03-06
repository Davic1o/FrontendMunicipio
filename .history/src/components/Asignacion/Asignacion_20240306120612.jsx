import React from 'react';
import './asignacion.css'
import { FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineInput } from "react-icons/md";
import Select from '../selects/Select'
import BotonAceptar from '../botones/BotonAceptar';

function Asignacion({usuarios, rutas}) {
  // Estados para almacenar las selecciones del usuario

  const users = usuarios.map(fila=> fila.username);
  const rutes = rutas.map(fila=> fila.username);
  return (
    <>
    <div className="contendor__asignacion">
    <div>
      <div className="titulo__seleccion">
      <h2>Asignacion de Rutas</h2>
      </div>
<div className="seleccion__usuarios">

<label htmlFor="userSelect">Seleccionar Usuario:</label>
      <Select Icono={<MdOutlineInput />} Options={opciones}></Select>

</div>
<div className="seleccion__ruta">
      <label htmlFor="routeSelect">Seleccionar Ruta:</label>
      <Select Icono={<MdOutlineInput />} Options={opciones}></Select>
</div>
<div className="seleccion__aceptar">
      <BotonAceptar Icono={<FaArrowDownWideShort />} NombreBoton='Asignar' />

</div>
    </div>
      </div>    
    </>
  );
}

export default Asignacion;
