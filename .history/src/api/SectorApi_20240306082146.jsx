// SectorApi.jsx

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

// Función para crear un nuevo sector
export const crearSector = async (nombre_Sector, id_Zona) => {
  try {
    const response = await axios.post(API_URL, {
      nombre_Sector: nombre_Sector,
      id_Zona: id_Zona,
    });

    if (response.status === 200) {
      console.log('Sector creado exitosamente:', response.data);
      // Realizar otras acciones si es necesario
    } else {
      console.error('Error al crear el sector:', response.statusText);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
};

// Función para obtener todos los sectores
export const obtenerSectores = async () => {
  try {
    const response = await axios.get(API_URL);

    if (response.status === 200) {
      console.log('Sectores obtenidos exitosamente:', response.data);
      return response.data;
    } else {
      console.error('Error al obtener los sectores:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    return [];
  }
};
