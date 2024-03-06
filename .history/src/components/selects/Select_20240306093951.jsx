import React from 'react';
import './select.css';

function Select({ Icono, Options, onChange }) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <div className="contenedor__select">
        <div className="inf__select">
          <div className="icono__select">{Icono}</div>
          <div className="campo__select">
            <select className="select" defaultValue="" onChange={handleChange}>
              <option value="" disabled hidden>
                Seleccione una opción
              </option>
              {Options.map((option) => (
                <option key={option.value} value={option.label}>
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
