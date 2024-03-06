import { useState, useEffect } from 'react';

const UserApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/datauser');
        const data = await response.json();

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

    fetchDataFromApi();
  }, []);

  return apiData;
};

export default UserApi;
