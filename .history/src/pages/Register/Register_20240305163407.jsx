import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import InputTexto from '../../components/inputs/InputTexto';
import InputPass from '../../components/inputs/InputPass';
import BotonAcceso from '../../components/botones/BotonAcceso';
import Select from '../../components/selects/Select';
import logo from '../../images/logoquito.png';
import './register.css';
import { FaUser, FaRegMap, FaKey, FaAlignCenter, FaAddressCard } from 'react-icons/fa';

function Register() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState('');

  const handleSelectChange = (e) => {
    const zonaSeleccionada = e.target.value;
    setZonaSeleccionada(zonaSeleccionada);
  };
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    username: '',
    cedula: '',
    password: '',
    confPassword: '',
    zona: '',
  });

  const opciones = ['Zona Norte', 'Zona Sur', 'Zona Centro'];

  const handleInputChange = (campo, valor) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [campo]: valor,
    }));
  };

  const handleRegistro = async () => {
    // Validar el formulario antes de enviar la solicitud al backend
    if (formulario.username === '' || formulario.cedula === '' || formulario.password === '') {
      console.error('Completa todos los campos del formulario');
      return;
    }

    try {
      // Realizar la solicitud POST al backend
      const respuesta = await fetch('http://localhost:3000/api/datauser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formulario),
      });

      // Verificar si la solicitud fue exitosa (código de respuesta 2xx)
      if (respuesta.ok) {
        // Aquí puedes manejar el caso de éxito, redirigir, mostrar un mensaje, etc.
        console.log('Usuario registrado exitosamente');
        navigate('/Administrador');
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
                TextoInput={formulario.username}
                setTextoInput={(valor) => handleInputChange('username', valor)}
              />
            </div>
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto
                Icono={<FaAddressCard />}
                Placeholder="Cedula"
                TextoInput={formulario.cedula}
                setTextoInput={(valor) => handleInputChange('cedula', valor)}
              />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Password"
                TextoInput={formulario.password}
                setTextoInput={(valor) => handleInputChange('password', valor)}
              />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Repetir Password"
                TextoInput={formulario.confPassword}
                setTextoInput={(valor) => handleInputChange('confPassword', valor)}
              />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
            <Select
  Icono={<FaRegMap />}
  Options={opciones}
  onChange={(e) => handleSelectChange(e)}
/>
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
              <BotonAcceso Icono={<FaAlignCenter />} NombreBoton='Registrarse' onClick={handleRegistro} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
