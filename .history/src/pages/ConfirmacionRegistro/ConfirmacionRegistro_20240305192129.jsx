import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './confirmacionregistro.css';
import Footer from '../../components/Footer/Footer';

function ConfirmacionRegistro() {
  const location = useLocation();
  const { state } = location;

  let Coordinador = 'Pendiente de Asignacion';



  return (
    <div className="contenedor__confirmacion">
      <h2 className="titulo__confirmacion">Confirmación de Registro</h2>
      {state && state.userInfo && (
        <div className="datos__confirmacion">
          <div className="datos__reg nombre__confirmacion">
            <p>
              <span>Nombre de usuario:</span> 
            </p>
          </div>
          <div className="datos__reg cedula__confirmacion">
            <p>
              <span>Cédula:</span> 
            </p>
          </div>
          <div className="datos__reg coordinador__confirmacion">
            <p>
              <span>Coordinador:</span> 
            </p>
          </div>
          <div className="datos__reg zona__confirmacion">
            <p>
              <span>Zona:</span> 
          </div>
          <Link to={'/'}>
            <div className="datos__reg zona__confirmacion">
              <MdArrowBack className="icono__atras" />
            </div>
          </Link>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ConfirmacionRegistro;