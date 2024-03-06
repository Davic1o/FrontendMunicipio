import React from 'react';
import UserApi from '../../api/UserApi';
import { Link } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import logo from '../../images/logoquito.png';
import './login.css';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

function Login() {
  const apiData = UserApi();
  
  return (
    <div>
      <div className="login__container">
        <div className="login__form">
          <div className="logo__municipio">
          
            <img src={logo} alt="logo Quito" />
          </div>
          <div className="form form__userName">
            <div className="input__userName">
              <InputTexto Icono={<FaUser />} Placeholder="User Name" />
            </div>
          </div>
          <div className="form form__userPass">
            <div className="input__userPass">
              <InputPass Icono={<FaKey />} Placeholder="Password" />
            </div>
          </div>

          <div className="form__register">
            <div className="text__register">
            ¿No tienes cuenta?
            {apiData.map((item, index) => (
    <span key={index}> hola {item.username}</span>
  ))}
            </div>
            <div className="link__register">
              <Link to="Registro">
                Regístrate
              </Link>
            </div>
          </div>

          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso Icono={<RiLoginCircleLine />} NombreBoton='Ingresar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
