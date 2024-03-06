import React, { useState } from 'react';

function Asistencias() {
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
    <div>
      <h2>Controld e Asistencias</h2>

      {/* Select para elegir el usuario */}
      <label htmlFor="userSelect">Seleccionar Usuario:</label>
      <select id="userSelect" value={selectedUser} onChange={handleUserChange}>
        <option value="usuario1">Usuario 1</option>
        <option value="usuario2">Usuario 2</option>
        {/* Agrega más opciones según tus necesidades */}
      </select>

      {/* Select para elegir la ruta */}
      <label htmlFor="routeSelect">Seleccionar Ruta:</label>
      <select id="routeSelect" value={selectedRoute} onChange={handleRouteChange}>
        <option value="ruta1">Ruta 1</option>
        <option value="ruta2">Ruta 2</option>
        {/* Agrega más opciones según tus necesidades */}
      </select>
    </div>
  );
}

export default Asistencias;