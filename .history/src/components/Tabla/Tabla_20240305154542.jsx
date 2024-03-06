import React from 'react';
import './tabla.css';

function Tabla({ datos }) {
  if (!datosUsuarios || datosUsuarios.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const columnas = Object.keys(datosUsuarios[0]);

  return (
    <table className="tabla contenedor">
      <thead className="titulo__tabla">
        <tr className="tr__titulo">
          {columnas.map((columna, index) => (
            <th className="th__titulo" key={index}>
              {columna}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="cuerpo__tabla">
        {datosUsuarios.map((fila, index) => (
          <tr className="tr__cuerpo" key={index}>
            {columnas.map((columna, index) => (
              <td className="td__cuerpo" key={index}>
                {fila[columna]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
