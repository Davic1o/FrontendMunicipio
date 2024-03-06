import React from 'react'

function Tabla() {
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