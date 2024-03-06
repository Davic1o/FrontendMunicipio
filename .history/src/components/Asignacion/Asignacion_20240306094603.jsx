import React, { useState } from 'react';
import './asignacion.css'
import { FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineInput } from "react-icons/md";
import Select from '../selects/Select'
import BotonAceptar from '../botones/BotonAceptar';

function Asignacion({usuarios, rutas}) {
  // Estados para almacenar las selecciones del usuario
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');

  const users = usuarios.map((fila) => ({ value: fila._id, label: fila.username }));
  const rutes = rutas.map((fila) => ({ value: fila._id, label: fila.nombre_Sector }));

  const handleUserSelect = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  const handleRouteSelect = (selectedOption) => {
    setSelectedRoute(selectedOption);
  };
// ...

const handleAsignarClick = () => {
  // Aquí puedes usar selectedUser y selectedRoute para realizar acciones según la selección
  console.log('Usuario seleccionado:', selectedUser);
  console.log('Ruta seleccionada:', selectedRoute);

  // Puedes realizar otras acciones con los valores seleccionados
};
// ...


  return (
    <>
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
<BotonAceptar Icono={<FaArrowDownWideShort />} NombreBoton='Asignar' onClick={handleAsignarClick} />

</div>
    </div>
      </div>    
    </>
  );
}

export default Asignacion;
