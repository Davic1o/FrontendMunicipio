import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import Select from '../../components/selects/Select'
import logo from '../../images/logoquito.png';

import './register.css';
import { FaUser,FaRegMap, FaKey, FaAlignCenter, FaAddressCard } from 'react-icons/fa';

function Register() {
  const [TextoUsername,setTextoUsername]=useState('');
  const [TextoCedula,setTextoCedula]=useState('');
  const [TextoPassword,setTextoPassword]=useState('');
  const [TextoConfPassword,setTextoConfPassword]=useState('');
  const [zonaSeleccionada, setZonaSeleccionada] = useState(''); 
  
  const opciones = ['Zona Norte','Zona Sur','Zona Centro' ]

  const handleRegistro = async () => {
    // Crear un objeto con los datos del formulario
    const datosUsuario = {
      username: TextoUsername,
      cedula: TextoCedula,
      password: TextoPassword,
      zona: ZonaSeleccionada,
    };

    try {
      // Realizar la solicitud POST al backend
      const respuesta = await fetch('URL_DE_TU_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
      });

      // Verificar si la solicitud fue exitosa (código de respuesta 2xx)
      if (respuesta.ok) {
        // Aquí puedes manejar el caso de éxito, redirigir, mostrar un mensaje, etc.
        console.log('Usuario registrado exitosamente');
      } else {
        // Aquí puedes manejar el caso de error, mostrar un mensaje de error, etc.
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  return (
    <div>
      <div className="register__container">
        <div className="register__form">
          <div className="logo__municipio">
            <img src={logo} alt="logo Quito" />
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto 
              Icono={<FaUser />} 
              Placeholder="User Name"
              TextoInput={TextoUsername}
              setTextoInput={setTextoUsername} />
            </div>
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto 
              Icono={<FaAddressCard />} 
              Placeholder="Cedula" 
              TextoInput={TextoCedula}
              setTextoInput={setTextoCedula}
               />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass 
              Icono={<FaKey />} 
              Placeholder="Password" 
              TextoInput={TextoPassword}
              setTextoInput={setTextoPassword} />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass 
              Icono={<FaKey />} 
              Placeholder="Repetir Password" 
              TextoInput={TextoConfPassword}
              setTextoInput={setTextoConfPassword} />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <Select 
              Icono={<FaRegMap />} 
              Options={opciones}
              onChange={(e) => setZonaSeleccionada(e.target.value)}></Select>
            </div>
          </div>

          <div className="form__register">
            <div className="text__register">
              ¿Ya tienes cuenta?
            </div>
            <div className="link__register">
              <Link to="/">
                Inicia Sesión
              </Link>
            </div>
          </div>

          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso Icono={<FaAlignCenter />} NombreBoton='Registrarse' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
