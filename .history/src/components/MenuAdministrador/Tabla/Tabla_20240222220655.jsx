import React from 'react'
import './tabla.css'

function Tabla({ datos }) {
    if (!datos || datos.length === 0) {
        return <p>No hay datos disponibles</p>;
      }
    
      const columnas = Object.keys(datos[0]);
    return (
        <table>
          <thead>
            <tr>
              {columnas.map((columna, index) => (
                <th key={index}>{columna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, index) => (
              <tr key={index}>
                {columnas.map((columna, index) => (
                  <td key={index}>{fila[columna]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
  

export default Tabla