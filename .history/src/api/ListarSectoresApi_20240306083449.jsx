import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/datauser';

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
}
export default ListarSectoresApi