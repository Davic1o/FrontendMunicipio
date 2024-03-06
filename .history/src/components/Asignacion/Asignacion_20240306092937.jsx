import React, { useState } from 'react';
import './asignacion.css';
import { FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineInput } from "react-icons/md";
import Select from '../selects/Select';
import BotonAceptar from '../botones/BotonAceptar';

function Asignacion({ usuarios, rutas }) {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');

  const users = usuarios.map(fila => fila.username);
  const rutes = rutas.map(fila => fila.nombre_Sector);

  const handleUserSelect = (selectedValue) => {
    setSelectedUser(selectedValue);
  };

  const handleRouteSelect = (selectedValue) => {
    setSelectedRoute(selectedValue);
  };

  const handleAsignar = () => {
    // Aquí puedes utilizar selectedUser y selectedRoute según tus necesidades
    if (selectedUser && selectedRoute) {
      console.log('ID del usuario seleccionado:', selectedUser);
      console.log('Nombre de la ruta seleccionada:', selectedRoute);
      // Realizar la asignación u otras acciones necesarias
    } else {
      console.error('Por favor, selecciona un usuario y una ruta');
      // Puedes manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <div className="contendor__asignacion">
      <div>
        <div className="titulo__seleccion">
          <h2>Asignacion de Rutas</h2>
        </div>
        <div className="seleccion__usuarios">
          <label htmlFor="userSelect">Seleccionar Usuario:</label>
          <Select Icono={<MdOutlineInput />} Options={users} onSelect={handleUserSelect} />
        </div>
        <div className="seleccion__ruta">
          <label htmlFor="routeSelect">Seleccionar Ruta:</label>
          <Select Icono={<MdOutlineInput />} Options={rutes} onSelect={handleRouteSelect} />
        </div>
        <div className="seleccion__aceptar">
          <BotonAceptar Icono={<FaArrowDownWideShort />} NombreBoton='Asignar' onClick={handleAsignar} />
        </div>
      </div>
    </div>
  );
}

export default Asignacion;

