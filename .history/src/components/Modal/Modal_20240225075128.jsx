import React, { useState } from 'react';
import './modal.css'
import BotonAceptar from '../botones/BotonAceptar';

const Modal = ({ isOpen, onClose, diasemana,fecha }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    // Puedes agregar más lógica aquí según tus necesidades
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>{fecha.toDateString()}</h1>
      
        <h2>Detalles para {diasemana}</h2>
        <div className="time-list">
          {[...Array(13).keys()].map((hour) => (
            <button
              key={hour + 7}
              onClick={() => handleTimeClick(`${hour + 7}:00`)}
              className={selectedTime === `${hour + 7}:00` ? 'selected' : ''}
            >
              {`${hour + 7}:00`}
            </button>
          ))}
        </div>
        <BotonAceptar/>
        <p>Horario seleccionado: {selectedTime}</p>
      </div>
    </div>
  );
};

export default Modal;