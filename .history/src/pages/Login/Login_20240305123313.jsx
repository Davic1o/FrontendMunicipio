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

            ¿No tienes cuenta?
            {apiData.map((item, index) => (
    <span key={index}> hola {item.username}</span>
  ))}
           
    </div>
  );
}

export default Login;
