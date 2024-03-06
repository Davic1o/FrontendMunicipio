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
          <div className="logo__municipio">
            <img src={logo} alt="logo Quito" />
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto
                Icono={<FaUser />}
                Placeholder="User Name"
                TextoInput={valoresCamposTexto.username}
                setTextoInput={(valor) => handleInputChange('username', valor)}
              />
            </div>
          </div>
          <div className="form form__registerName">
            <div className="input__registerName">
              <InputTexto
                Icono={<FaAddressCard />}
                Placeholder="Cedula"
                TextoInput={valoresCamposTexto.cedula}
                setTextoInput={(valor) => handleInputChange('cedula', valor)}
              />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Password"
                TextoInput={valoresCamposTexto.password}
                setTextoInput={(valor) => handleInputChange('password', valor)}
              />
            </div>
          </div>
          <div className="form form__registerPass">
            <div className="input__registerPass">
              <InputPass
                Icono={<FaKey />}
                Placeholder="Repetir Password"
                TextoInput={valoresCamposTexto.confPassword}
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
            <div className="text__register">¿Ya tienes cuenta?</div>
            <div className="link__register">
              <Link to="/">Inicia Sesión</Link>
            </div>
          </div>

          <div className="form form__acept">
            <div className="button__acept">
              <BotonAcceso Icono={<FaAlignCenter />} NombreBoton="Registrarse" onClick={handleRegistro} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
