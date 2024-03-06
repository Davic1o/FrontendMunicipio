import React, { useState } from 'react';
import './select.css';

function Select({ Icono, Options, onChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Llamar a la función onChange del componente padre, si está definida
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <>
      <div className="contenedor__select">
        <div className="inf__select">
          <div className="icono__select">{Icono}</div>
          <div className="campo__select">
            <select className="select" value={selectedOption} onChange={handleSelectChange}>
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
