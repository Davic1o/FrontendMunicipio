import React, { useState } from 'react';
import './asignacion.css'
import { FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineInput } from "react-icons/md";
import Select from '../selects/Select'
import BotonAceptar from '../botones/BotonAceptar';

function Asignacion() {
  // Estados para almacenar las selecciones del usuario
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');

  // Función para manejar el cambio en la selección del usuario
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // Función para manejar el cambio en la selección de la ruta
  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };
  const opciones = ['Zona Norte','Zona Sur','Zona Centro' ]
  return (
    <>
    <div className="contendor__asignacion">
    <div>
      <div className="titulo__seleccion">
      <h2>Asignacion de Rutas</h2>
      </div>
<div className="seleccion__usuarios">

<label htmlFor="userSelect">Seleccionar Usuario:</label>
      <Select Icono={<FaRegMap />} Options={opciones}></Select>

</div>
<div className="seleccion__ruta">
      <label htmlFor="routeSelect">Seleccionar Ruta:</label>
      <Select Icono={<FaRegMap />} Options={opciones}></Select>
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
