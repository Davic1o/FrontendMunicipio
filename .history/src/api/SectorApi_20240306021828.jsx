import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

const SectorApi = () => {
  const [apiData, setApiData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      // Cambia el método a 'post' y proporciona los datos necesarios en el cuerpo
      const response = await axios.post(API_URL, {
        // Agrega aquí los datos que deseas enviar en la solicitud POST
        // Ejemplo: key1: 'value1', key2: 'value2', ...
      });

      const data = response.data;

      // Supongamos que la respuesta de la API es un arreglo
      if (Array.isArray(data)) {
        setApiData(data);
      } else {
        throw new Error("La respuesta de la API no es un arreglo");
      }
    } catch (error) {
      console.error("Error al obtener datos de la API:", error.message);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []); // Llamada inicial

  return { apiData };
};

export default SectorApi;
