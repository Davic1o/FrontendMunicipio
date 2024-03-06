import React from 'react';
import './select.css';

function Select({ Icono, Options, onSelect }) {
  const handleChange = (e) => {
    const selectedOption = Options.find((option) => option.value === e.target.value);
    console.log('Selected value:', selectedValue);
    console.log('Selected option:', selectedOption);
    if (onSelect) {
      onSelect(selectedOption);
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
                  {option.label}
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
