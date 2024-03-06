import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import logo from '../../images/logoquito.png';
import './login.css';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('URL_DE_TU_API/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Manejar el token de acceso (almacenar en el estado, localStorage, etc.)
        console.log('Token de acceso:', data.access_token);
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };
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
