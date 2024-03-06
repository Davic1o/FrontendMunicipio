import React from 'react'
import './tabla.css'

function Tabla({ datos }) {
    if (!datos || datos.length === 0) {
        return <p>No hay datos disponibles</p>;
      }
    
      const columnas = Object.keys(datos[0]);
    return (
        <table className='tabla contenedor'>
          <thead className='titulo__tabla'>
            <tr className='tr__titulo'>
              {columnas.map((columna, index) => (
                <th className='th__titulo' key={index}>{columna}</th>
              ))}
            </tr>
          </thead>
          <tbody className='cuerpo__tabla'>
            {datos.map((fila, index) => (
              <tr className='tr__cuerpo' key={index}>
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