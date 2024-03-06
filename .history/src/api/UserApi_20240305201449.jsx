import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/api/datauser';

const UserApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(API_URL);
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

  const actualizarUsuarioAprobar = async (userId, nuevoEstado) => {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aprobar: nuevoEstado }),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar usuario: ${response.status} ${response.statusText}`);
      }

      const updatedUser = await response.json();

      // Actualizar el estado local con el usuario actualizado
      setApiData((prevData) => {
        const updatedData = prevData.map((user) =>
          user.userId === userId ? { ...user, aprobar: nuevoEstado } : user
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
