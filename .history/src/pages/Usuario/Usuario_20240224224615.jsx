import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MenuUsuario from '../../components/MenuUsaurio/MenuUsuario';
import EscogerRonda from '../../components/Calendario/EscogerRonda';


function Usuario() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  return (
    <>
    <div className="contenedor__administrador">
      <div className="menu__Administrador">
        <MenuUsuario/>
        </div>
      <div className="administrador__navbar">
        <Navbar />
        <div className="tablas__informativas">
         {opcionSeleccionada === 'Rondas' && <EscogerRonda />}
          {/* ... Otras opciones de renderizado según sea necesario */}
          </div>
      </div>
    </div>
  </>
  )
}

export default Usuario