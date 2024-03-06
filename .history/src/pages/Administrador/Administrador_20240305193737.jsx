import React, { useState } from 'react';
import UserApi from '../../api/UserApi';
import './administracion.css';
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';
import Tabla from '../../components/Tabla/Tabla';
import TablaOpciones from '../../components/Tabla/TablaOpciones';

function Administrador() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };



  const datosUsuarios = UserApi();
  const usuariosAprobados = datosUsuarios.filter((usuario) => usuario.aprobar);
  const usuariosRechazados = datosUsuarios.find(user => user.username === "admin");



  return (
    <>
      <div className="contenedor__administrador"> 
        <div className="menu__Administrador">
          <MenuAdministrador onMenuClick={handleMenuClick} />
        </div>
        <div className="administrador__navbar">
          <Navbar />
          <div className="tablas__informativas">
            {/* Renderizar la tabla según la opción seleccionada */}
            {opcionSeleccionada === 'todosUsuarios' && <TablaOpciones  datos={datosUsuarios} />}
            {opcionSeleccionada === 'UsuariosAceptados' && <Tabla datos={usuariosAprobados} />}
            {opcionSeleccionada === 'UsuariosRechazados' && <Tabla datos={usuariosAceptados} />}
            {opcionSeleccionada === 'UsuariosCoordinadores' && <Tabla datos={usuariosAceptados} />}
            </div>
        </div>
      </div>
    </>
  );
}

export default Administrador;
