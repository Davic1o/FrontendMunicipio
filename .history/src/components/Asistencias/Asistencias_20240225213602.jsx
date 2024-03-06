import React, {useState} from 'react'
import Tabla from '../Tabla/Tabla'

function Asistencias() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleMenuClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const datosEjemplo = {
    todosUsuarios: [
      { Nombre: 'Juan', Edad: 25, Ciudad: 'Barcelona', Ciudada: 'Barcelona' },
      { Nombre: 'María', Edad: 30, Ciudad: 'Madrid', Ciudada: 'Barcelona' },
      { Nombre: 'Pedro', Edad: 22, Ciudad: 'Valencia', Ciudada: 'Barcelona' },
    ],
  }
      return (
        <>
    <Tabla datos={datosEjemplo[todosUsuarios]}/>
    </>
  )
}

export default Asistencias