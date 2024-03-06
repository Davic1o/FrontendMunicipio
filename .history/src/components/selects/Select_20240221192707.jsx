import React from 'react';
import './select.css'; // Asegúrate de tener un archivo select.css con estos estilos

function Select({ Icono, Options }) {
  return (
    <>
      <div className="contenedor__select">
        <div className="inf__select">
          <div className="icono__select">{Icono}</div>
          <div className="campo__select">
            <select className="select" defaultValue="">
              <option value="" disabled hidden>
                Seleccione una opción
              </option>
              {Options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Select;
