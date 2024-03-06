import React from 'react'
import './tabla.css'
import BotonAceptar from '../botones/BotonAceptar';
import BotonCancelar from '../botones/BotonCancelar';
import { RiLoginCircleLine } from 'react-icons/ri';

function Tabla({ datos }) {
    if (!datos || datos.length === 0) {
        return 
      }
    
      const columnas = Object.keys(datos[0]);
    return (
        <table className='tabla contenedor'>
          <thead className='titulo__tabla'>
            <tr className='tr__titulo'>
              {columnas.map((columna, index) => (
                <th className='th__titulo' key={index}>{columna}</th>
              ))}
              <th>Accion</th>
            </tr>
          </thead>
          <tbody className='cuerpo__tabla'>
            {datos.map((fila, index) => (
              <tr className='tr__cuerpo' key={index}>
                {columnas.map((columna, index) => (
                  <td className='td__cuerpo' key={index}>{fila[columna]}</td>
                  
                ))}
                <td>
                  <BotonAceptar Icono={<RiLoginCircleLine />} NombreBoton='Ingresar'/>
                  <BotonCancelar Icono={<RiLoginCircleLine />} NombreBoton='Ingresar'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
  

export default Tabla