// SectorApi.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

const SectorApi = () => {
  const [sectoresData, setSectoresData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;

      if (Array.isArray(data)) {
        setSectoresData(data);
      } else {
        throw new Error("La respuesta de la API no es un arreglo");
      }
    } catch (error) {
      console.error("Error al obtener datos de la API:", error.message);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [sectoresData]); // Llamada inicial y cuando sectoresData cambie

  const crearSector = async (nombre_Sector, id_Zona) => {
    try {
      const response = await axios.post(API_URL, {
        nombre_Sector: nombre_Sector,
        id_Zona: id_Zona,
      });

      if (response.status === 200) {
        console.log('Sector creado exitosamente:', response.data);
        // Realizar otras acciones si es necesario
      } else {
        throw new Error(`Error al crear el sector: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      throw new Error('Error al crear el sector');
    }
  };

  return { sectoresData, crearSector };
};

export default SectorApi;
