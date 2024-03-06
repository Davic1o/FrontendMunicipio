import React, { useState } from 'react';
import UserApi from '../../api/UserApi';
import './administracion.css';
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';
import Tabla from '../../components/Tabla/Tabla';
import TablaOpciones from '../../components/Tabla/TablaOpciones';

function Administrador() {

  const opcionesBotonAceptar = {
    actualizarUsuarioAprobar: UserApi().actualizarUsuarioAprobar,
  };

  const opcionesBotonCancelar = {
    // Define las opciones para el botón de cancelar
    // Pueden ser propiedades específicas que necesitas para el botón de cancelar
  };
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };



  
  const datosUsuarios = UserApi().apiData;
  const usuariosAprobados = datosUsuarios.filter((usuario) => usuario.aprobar ===false);
  const usuariosRechazados = datosUsuarios.filter((usuario) => !usuario.rechazar);
  const usuariosCoordinadores = datosUsuarios.filter((usuario) => !usuario.tipo=== "Usuario");



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
            {opcionSeleccionada === 'todosUsuarios' && (
            <TablaOpciones
              datos={datosUsuarios}
              opcionesBotonAceptar={opcionesBotonAceptar}
              opcionesBotonCancelar={opcionesBotonCancelar}
            />
          )}
            {opcionSeleccionada === 'UsuariosAceptados' && <Tabla datos={usuariosAprobados} />}
            {opcionSeleccionada === 'UsuariosRechazados' && <Tabla datos={usuariosRechazados} />}
            {opcionSeleccionada === 'UsuariosCoordinadores' && <Tabla datos={usuariosCoordinadores} 
/>}
            </div>
        </div>
      </div>
    </>
  );
}

export default Administrador;
