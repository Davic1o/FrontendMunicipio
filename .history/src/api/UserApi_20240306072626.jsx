import axios from 'axios';

const API_URL = 'http://localhost:3000/api/datauser';

const UserApi = async (valoresCamposTexto, idzona) => {
  try {
    const response = await axios.post(API_URL, {
      ...valoresCamposTexto,
      id_zona: idzona,
    });

    if (response.ok) {
      // Aquí puedes manejar el caso de éxito, redirigir, mostrar un mensaje, etc.
      console.log('Usuario registrado exitosamente');
      return response.data;
    } else {
      // Aquí puedes manejar el caso de error, mostrar un mensaje de error, etc.
      console.error('Error al registrar usuario');
      throw new Error('Error al registrar usuario');
    }
  } catch (error) {
    console.error('Error de red:', error);
    throw new Error('Error de red al registrar usuario');
  }
};

export default UserApi;
