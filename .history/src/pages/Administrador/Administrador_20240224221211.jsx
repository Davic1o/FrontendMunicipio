import React, { useState } from 'react';
import './administracion.css';
import Navbar from '../../components/Navbar/Navbar';
import MenuAdministrador from '../../components/MenuAdministrador/MenuAdministrador';
import Tabla from '../../components/Tabla/Tabla';
import TablaOpciones from '../../components/Tabla/TablaOpciones';

function Administrador() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };import React, { useState } from 'react';
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
  
    const datosEjemplo = {
      todosUsuarios: [
        { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudad: 'Barcelona' },
        { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudad: 'Barcelona' },
        { Nombre: 'Pedro', Edad: 22, Ciudad: 'Valencia', Ciudad: 'Barcelona' },
      ],
      // Otros conjuntos de datos según las opciones del menú
    };
  
    const datosDos = {
      UsuariosAceptados: [
        { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudad: 'Barcelona' },
        { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudad: 'Barcelona' },
      ],
    };
  
    const datosTres = {
      UsuariosRechazados: [
        { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudad: 'Barcelona' },
        { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudad: 'Barcelona' },
      ],
    };
  
    const datosCuatro = {
      UsuariosPendientes: [
        { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudad: 'Barcelona' },
        { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudad: 'Barcelona' },
      ],
    };
  
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
              {opcionSeleccionada && <TablaOpciones datos={datosEjemplo[opcionSeleccionada]} />}
              {opcionSeleccionada === 'UsuariosAceptados' && <Tabla datos={datosDos[opcionSeleccionada]} />}
              {opcionSeleccionada === 'UsuariosRechazados' && <Tabla datos={datosTres[opcionSeleccionada]} />}
              {opcionSeleccionada === 'UsuariosPendientes' && <Tabla datos={datosCuatro[opcionSeleccionada]} />}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Administrador;
  

  const datosEjemplo = {
    todosUsuarios: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
      { Nombre: 'Pedro', Edad: 22, Ciudad: 'Valencia', Ciudada: 'Barcelona' },
    ],
    // Otros conjuntos de datos según las opciones del menú
  };

  const datosDos={
    UsuariosAceptados: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
    ],
  }
  const datosTres={
    UsuariosAceptados: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
    ],
  }
  const datosCuatro={
    UsuariosAceptados: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
    ],
  }

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
            {opcionSeleccionada && <TablaOpciones datos={datosEjemplo[opcionSeleccionada]} />}
            {opcionSeleccionada && <Tabla datos={datosDos[opcionSeleccionada]} />}
            </div>
        </div>
      </div>
    </>
  );
}

export default Administrador;
