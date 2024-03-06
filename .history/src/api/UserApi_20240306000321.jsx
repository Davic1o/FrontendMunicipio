import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/datauser';

const UserApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
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

    fetchDataFromApi();
  }, []);

  const actualizarUsuarioAprobar = async (_id, accion) => {
    try {
      const response = await axios.put(`${API_URL}/${_id}`, {
        accion,
      });
  
      if (!response.data) {
        throw new Error(`Error al actualizar usuario: ${response.status} ${response.statusText}`);
      }
  
      const updatedUser = response.data;
  
      // Actualizar el estado local con el usuario actualizado
      setApiData((prevData) => {
        const updatedData = prevData.map((user) =>
          user._id === _id ? { ...user, aprobar: accion === 'aprobar', rechazar: accion === 'rechazar', tipo: accion === 'coordinador' } : user
        );
        return updatedData;
      });
  
      return updatedUser;
    } catch (error) {
      console.error("Error al actualizar usuario:", error.message);
      throw new Error("Error al actualizar usuario");
    }
  };

  return { apiData, actualizarUsuarioAprobar };
};

export default UserApi;
