import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

const SectorApi = async (valoresCamposTexto, idzona) => {
  try {
    const response = await axios.post(API_URL, {
      ...valoresCamposTexto,
      id_Zona: idzona,  // Ajustar el nombre del campo según tu esquema de datos
    });

    if (response.status === 200) {
      // La solicitud fue exitosa
      console.log('Ruta registrada exitosamente');
      return response.data;
    } else {
      // La solicitud no fue exitosa
      console.error('Error al registrar ruta');
      throw new Error('Error al registrar ruta');
    }
  } catch (error) {
    console.error('Error de red:', error);
    throw new Error('Error de red al registrar ruta');
  }
};

export default SectorApi;
