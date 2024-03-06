// CalendarBody.js
import React from 'react';

const CalendarBody = ({ weekDates, handleOpenModal }) => {
  return (
    <table className='tabla__rondas'>
      <thead className='tabla__titulo__rondas'>
        <tr className='fila__titulo'>
          {weekDates.map((date) => (
            <th className='dias__titulo' key={date.toISOString()}>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</th>
          ))}
        </tr>
      </thead>
      <tbody className='tabla__cuerpo__rondas'>
        <tr className='fila__cuerpo'>
          {weekDates.map((date) => (
            <td className='dias__cuerpo' key={date.toISOString()} onClick={() => handleOpenModal(date)}>
              {date.getDate()}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default CalendarBody;
