import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

const SectorApi = async (valoresCamposTexto, idzona)  => {
  const [apiData, setApiData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.post(API_URL, {
        nombre_Sector: valoresCamposTexto.sector, // Asegúrate de que los nombres coincidan con tu modelo
        id_Zona: idzona,
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
