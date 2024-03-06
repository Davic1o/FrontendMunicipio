import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MenuCoordinador from '../../components/MenuCoordinador/MenuCoordinador';
import Asistencias from '../../components/Asistencias/Asistencias';
import Asignacion from '../../components/Asignacion/Asignacion';
import CreacionRutas from '../../components/Creacion/CreacionRutas';

function Coordinador() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Recuperar la información del localStorage
      const storedUser = localStorage.getItem('currentUser');
  
      // Parsear la información si existe
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
        if (parsedUser.tipo !== 'coordinador') {
          localStorage.removeItem('currentUser');
          navigate('/');
        }
      } else {
        navigate('/');
      }
    }, [navigate]);
  


    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleMenuClick = (opcion) => {
        setOpcionSeleccionada(opcion);
    };

    return (
        <>
            <div className="contenedor__administrador">
                <div className="menu__Administrador">
                    <MenuCoordinador onMenuClick={handleMenuClick} />
                </div>
                <div className="administrador__navbar">
                <Navbar nombreuser={userData?.username} />
                    <div className="tablas__informativas">
                        {/* Renderizar la tabla según la opción seleccionada Creacion*/}
                        {opcionSeleccionada === 'Creacion' && <CreacionRutas/>}
                        {opcionSeleccionada === 'Asignacion' && <Asignacion />}
                        {opcionSeleccionada === 'Asistencias' && <Asistencias />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coordinador;
