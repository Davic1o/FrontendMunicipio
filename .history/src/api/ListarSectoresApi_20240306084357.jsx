import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/sector';

const ListarSectoresApi = () => {
  const [apiData, setApiData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(API_URL);
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

  // Llamamos a la función al cargar el componente
  useEffect(() => {
    fetchDataFromApi();
  }, []); // La dependencia está vacía para que se ejecute solo al montar

  // Retornamos los datos para que puedan ser utilizados fuera de la función
  return apiData;
};

export default ListarSectoresApi;
