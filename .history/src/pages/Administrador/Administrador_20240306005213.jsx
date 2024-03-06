import React, { useState } from 'react';
import UserApi from '../../api/UserApi';
import './administracion.css';
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';
import Tabla from '../../components/Tabla/Tabla';
import TablaOpciones from '../../components/Tabla/TablaOpciones';
import TablaOpcion from '../../components/Tabla/TablaOpcion';

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

  const [opcionCoordinador, setOpcionCoordinador] = useState(null);

  const handleMenuCoord = (opcion) => {
    setOpcionCoordinador(opcion);
  };



  
  const datosUsuarios = UserApi().apiData;
  const usuariosPendientes = datosUsuarios.filter((usuario) => usuario.aprobar ===false &&  usuario.rechazar ===false);
  const usuariosAprobados = datosUsuarios.filter((usuario) => usuario.aprobar ===true);
  const usuariosRechazados = datosUsuarios.filter((usuario) => usuario.rechazar === true);
  const usuariosCoordinadores = datosUsuarios.filter((usuario) => usuario.tipo === "Coordinador");



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
              datos={usuariosPendientes}
              opcionesBotonAceptar={opcionesBotonAceptar}
              opcionesBotonCancelar={opcionesBotonCancelar}
            />
          )}
            {opcionSeleccionada === 'UsuariosAceptados' && <TablaOpcion datos={usuariosAprobados} />}
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
