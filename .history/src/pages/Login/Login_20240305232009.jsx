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

// ... (importaciones y otros códigos)

function Login() {
  const { apiData } = UserApi();
  const navigate = useNavigate();  // Importa useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Buscar si existe un usuario con los datos proporcionados
    const userFound = apiData.find(user => user.username === username && user.password === password);
  
    if (userFound) {
      // Almacenar datos del usuario en localStorage
      localStorage.setItem('currentUser', JSON.stringify(userFound));
  
     if(userFound.tipo==='Administrador')
      navigate('/Administrador');
      console.log('Redireccionando...');
    }else if(userFound.tipo==="Coordinador"){
      navigate('/Coordinador');
      console.log('Redireccionando...');
    } else if(userFound.tipo==="Usuario"){
      navigate('/Usuario');
      console.log('Redireccionando...');
    } 
    else {
      // No se encontró al usuario
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <div className="login__container">
        <form className="login__form">
          <div className="logo__municipio">
            <img src={logo} alt="logo Quito" />
          </div>
          <div className="form form__userName">
            <div className="input__userName">
              <InputTexto
                Icono={<FaUser />}
                Placeholder="User Name"
                setTextoInput={setUsername} // Asegúrate de pasar la función correctamente
                TextoInput={username} // Asegúrate de pasar el valor correctamente
              />
            </div>
          </div>
          <div className="form form__userPass">
            <div className="input__userPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Password"
                setTextoInput={setPassword} // Asegúrate de pasar la función correctamente
                TextoInput={password} // Asegúrate de pasar el valor correctamente
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
        </form>
      </div>
    </div>
  );
}

export default Login;


