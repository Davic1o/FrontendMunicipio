import React, { useState } from 'react';
import UserApi from '../../api/UserApi';
import { Link, useNavigate } from 'react-router-dom';  // Asegúrate de importar useNavigate
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import logo from '../../images/logoquito.png';
import './login.css';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

function Login() {
  const apiData = UserApi(); // Asumiendo que devuelve un array de usuarios
  const navigate = useNavigate();  // Importa useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Buscar si existe un usuario con los datos proporcionados
    const userFound = apiData.find(user => user.username === username && user.password === password);

    if (userFound) {
      // Almacenar datos del usuario en localStorage
      localStorage.setItem('currentUser', JSON.stringify(userFound));

      // Navegar a la siguiente pestaña (ajusta la ruta según tus necesidades)
      navigate('/Administrador');
    } else {
      alert('Usuario o contraseña incorrectos');
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
              <InputTexto
                Icono={<FaUser />}
                Placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form form__userPass">
            <div className="input__userPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form__register">
            <div className="text__register">¿No tienes cuenta?</div>
            <div className="link__register">
              <Link to="Registro">Regístrate</Link>
            </div>
          </div>

          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso
                Icono={<RiLoginCircleLine />}
                NombreBoton='Ingresar'
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
