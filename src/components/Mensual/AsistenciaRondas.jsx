import React, { useState } from 'react';
import './calendario.css';  // Asegúrate de tener el archivo CSS correspondiente

const AsistenciaRondas = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    // Puedes agregar más lógica aquí según tus necesidades
  };

  // Lógica para generar los días de un mes específico
  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(i);
    }

    return { firstDay, daysArray };
  };

  // Obtener el mes y año actual
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Generar los días del mes actual
  const { firstDay, daysArray } = generateCalendarDays(currentYear, currentMonth);

  return (
    <div className="calendario-container">
      <h1>{firstDay.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</h1>
      <div className="calendar-header">
        <div>Domingo</div>
        <div>Lunes</div>
        <div>Martes</div>
        <div>Miércoles</div>
        <div>Jueves</div>
        <div>Viernes</div>
        <div>Sábado</div>
      </div>
      <div className="calendar-days">
        {Array(firstDay.getDay()).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="empty-day"></div>
        ))}
        {daysArray.map((day) => (
          <div
            key={day}
            onClick={() => handleDateClick(day)}
            className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
      <p>Fecha seleccionada: {selectedDate}</p>
    </div>
  );
};

export default AsistenciaRondas;
