import React from 'react';
import './tabla.css';
import BotonAceptar from '../botones/BotonAceptar';
import { MdCheckCircle } from 'react-icons/md';

function TablaOpciones({ datos, opcionesBotonAceptar, opcionesBotonCancelar }) {
  if (!datos || datos.length === 0 || datos[0] === undefined || datos[0] === null) {
    return <div className='sindatos'>No hay datos disponibles</div>;
  }

  const columnas = Object.keys(datos[0]).filter(columna => columna !== '_id' && columna !== '__v'&& columna !== 'aprobar' && columna !== 'rechazar'); // Excluir la columna '_id'

  const handleCoordinador = async (_id) => {
    try {
      // Actualizar el usuario en la API y obtén la respuesta
      const updatedUser = await opcionesBotonAceptar.actualizarUsuarioAprobar(_id, 'actualizar');
      console.log('Usuario actualizado:', updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error.message);
    }
  };

  return (
    <table className="tabla contenedor">
      <thead className="titulo__tabla">
        <tr className="tr__titulo">
          {columnas.map((columna, index) => (
            <th className="th__titulo" key={index}>
              {columna}
            </th>
          ))}
          <th>Accion</th>
        </tr>
      </thead>
      <tbody className="cuerpo__tabla">
        {datos.map((fila, index) => (
          <tr className="tr__cuerpo" key={index}>
            {columnas.map((columna, index) => (
              <td className="td__cuerpo" key={index}>
                {fila[columna]}
              </td>
            ))}
            <td className="acciones__tabla">
              <BotonAceptar
                className="boton__aceptar"
                Icono={<MdCheckCircle />}
                NombreBoton="Coordinador"
                opciones={opcionesBotonAceptar}
                onClick={() => handleCoordinador(fila._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaOpciones;
