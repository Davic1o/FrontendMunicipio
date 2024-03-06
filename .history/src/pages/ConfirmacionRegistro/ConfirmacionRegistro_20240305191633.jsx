import React from 'react';
import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import './confirmacionregistro.css'
import Footer from '../../components/Footer/Footer';

function ConfirmacionRegistro() {
  // Utiliza useLocation para acceder al estado enviado por Navigate
  const location = useLocation();
  const { state } = location;

  // Definir la variable Coordinador
  let Coordinador = "Pendiente de Asignacion";

  // Verificar si state.userInfo.zona es "Norte" y asignar el coordinador correspondiente
  if (state && state.userInfo && state.userInfo.zona === "Norte") {
    // Asigna el coordinador correspondiente para la Zona Norte
    Coordinador = "Coordinador Zona Norte";
  }

  return (
    <>
      <div className="contenedor__confirmacion">
        <h2 className='titulo__confirmacion'>Confirmación de Registro</h2>
        {state && state.userInfo && (
          <div className='datos__confirmacion'>
            <div className="datos__reg nombre__confirmacion">
              <p><span>Nombre de usuario:</span> {state.userInfo.username}</p>
            </div>
            <div className="datos__reg cedula__confirmacion">
              <p><span>Cédula:</span> {state.userInfo.cedula}</p>
            </div>
            <div className="datos__reg coordinador__confirmacion">
              <p><span>Coordinador:</span> {Coordinador}</p>
            </div>
            <div className="datos__reg zona__confirmacion">
              <p><span>Zona:</span> {state.userInfo.zona}</p>
            </div>
            <Link to={'/'}>
              <div className="datos__reg zona__confirmacion">
                <MdArrowBack  className='icono__atras'/>
              </div>
            </Link>
          </div>
        )}
        <div >
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default ConfirmacionRegistro;

