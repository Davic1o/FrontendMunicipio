import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import Select from '../../components/selects/Select';
import logo from '../../images/logoquito.png';
import './register.css';
import { FaUser, FaRegMap, FaKey, FaAlignCenter, FaAddressCard } from 'react-icons/fa';

// ... (Importa tus dependencias)

function Register() {
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
      valoresCamposTexto.password === ''
    ) {
      console.error('Completa todos los campos del formulario');
      return;
    }

    try {
      // Realizar la solicitud POST al backend con los valores de los campos de texto
      const respuesta = await fetch('http://localhost:3000/api/datauser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...valoresCamposTexto,
          zona: zonaSeleccionada,
          tipo: 'Usuario',
          aprobar: false,
          rechazar: false,
        }),
      });

      // Verificar si la solicitud fue exitosa (código de respuesta 2xx)
      if (respuesta.ok) {
        // Aquí puedes manejar el caso de éxito
        console.log('Usuario registrado exitosamente');

        // Crear un arreglo con los datos del usuario
        const userInfoArray = [
          valoresCamposTexto.username,
          valoresCamposTexto.cedula,
          valoresCamposTexto.password,
          zonaSeleccionada,
        ];

        // Redirigir a la siguiente página y pasar los datos como estado
        navigate('/SiguienteFormulario', { state: { userInfoArray } });
      } else {
        // Aquí puedes manejar el caso de error, mostrar un mensaje de error, etc.
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  // ... Resto de tu componente sigue igual

  return (
    // ... Tu JSX restante sigue igual
  );
}

export default Register;

