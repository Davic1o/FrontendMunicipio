import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import Select from '../../components/selects/Select';
import logo from '../../images/logoquito.png';
import './register.css';
import { FaUser, FaRegMap, FaKey, FaAlignCenter, FaAddressCard } from 'react-icons/fa';
import registerUser from './RegisterApi';

function RegisterForm() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState('');
  const [valoresCamposTexto, setValoresCamposTexto] = useState({
    username: '',
    cedula: '',
    password: '',
    confPassword: '',
  });

  const navigate = useNavigate();

  const opciones = ['Zona Norte', 'Zona Sur', 'Zona Centro'];

  const handleSelectChange = (e) => {
    const zonaSeleccionada = e.target.value;
    setZonaSeleccionada(zonaSeleccionada);
  };

  const handleInputChange = (campo, valor) => {
    setValoresCamposTexto((prevValores) => ({
      ...prevValores,
      [campo]: valor,
    }));
  };

  const handleRegistro = async () => {
    // Validar el formulario antes de enviar la solicitud al backend
    if (
      valoresCamposTexto.username === '' ||
      valoresCamposTexto.cedula === '' ||
      valoresCamposTexto.password === '' ||
      valoresCamposTexto.password !== valoresCamposTexto.confPassword
    ) {
      console.error('Completa todos los campos del formulario y asegúrate de que las contraseñas coincidan');
      return;
    }

    try {
      // Realizar la solicitud POST al backend con los valores de los campos de texto
      await registerUser(valoresCamposTexto, zonaSeleccionada);

      // Redirigir después del registro exitoso
      navigate('/Confirmacion', { state: { userInfoArray: [valoresCamposTexto.username, valoresCamposTexto.cedula, valoresCamposTexto.password, zonaSeleccionada] } });
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  };

  return (
    <div>
      <div className="register__container">
        <form className="register__form">
          {/* Resto del código del formulario */}
          {/* ... */}
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
