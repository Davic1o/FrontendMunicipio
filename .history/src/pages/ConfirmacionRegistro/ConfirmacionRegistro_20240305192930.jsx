import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './confirmacionregistro.css';
import Footer from '../../components/Footer/Footer';

function ConfirmacionRegistro() {
  const location = useLocation();
  const UserInfo = location.state.userInfoArray;

  let Coordinador = 'Pendiente de Asignacion';

  if (state && state.userInfo && state.userInfo.zona === 'Norte') {
    Coordinador = 'Coordinador Zona Norte';
  }

  return (
    <div className="contenedor__confirmacion">
      <h2 className="titulo__confirmacion">Confirmación de Registro</h2>

      <div className="datos__confirmacion">
        <div className="datos__reg nombre__confirmacion">
          <p>
            <span>Nombre de usuario:</span> {userInfoArray[0]}
          </p>
        </div>
        <div className="datos__reg cedula__confirmacion">
          <p>
            <span>Cédula:</span> {state.userInfo.cedula}
          </p>
        </div>
        <div className="datos__reg coordinador__confirmacion">
          <p>
            <span>Coordinador:</span> {Coordinador}
          </p>
        </div>
        <div className="datos__reg zona__confirmacion">
          <p>
            <span>Zona:</span> {state.userInfo.zona}
          </p>
        </div>
        <Link to={'/'}>
          <div className="datos__reg zona__confirmacion">
            <MdArrowBack className="icono__atras" />
          </div>
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ConfirmacionRegistro;
