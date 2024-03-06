import axios from 'axios';

const crearSector = async (nombre_Sector, id_Zona) => {
  try {
    // Realizar la solicitud POST con Axios
    const response = await axios.post('http://tu-servidor/api/ruta-del-endpoint', {
      nombre_Sector: nombre_Sector,
      id_Zona: id_Zona,
    });

    // Verificar si la solicitud fue exitosa
    if (response.status === 200) {
      console.log('Sector creado exitosamente:', response.data);
      // Realizar otras acciones si es necesario
    } else {
      console.error('Error al crear el sector:', response.statusText);
      // Manejar el error de acuerdo a tus necesidades
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    // Manejar el error de acuerdo a tus necesidades
  }
};

export default crearSector;
