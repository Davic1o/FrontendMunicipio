import React, { useState } from 'react';
import { FaRegMap} from 'react-icons/fa';

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

  return (
    const opciones = ['Zona Norte','Zona Sur','Zona Centro' ]
    <div>
      <h2>Asignacion</h2>

      {/* Select para elegir el usuario */}
      <label htmlFor="userSelect">Seleccionar Usuario:</label>
      <Select Icono={<FaRegMap />} Options={opciones}></Select>

      {/* Select para elegir la ruta */}
      <label htmlFor="routeSelect">Seleccionar Ruta:</label>
      <Select Icono={<FaRegMap />} Options={opciones}></Select>
    </div>
  );
}

export default Asignacion;
