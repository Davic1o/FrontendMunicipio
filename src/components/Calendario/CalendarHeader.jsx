// CalendarHeader.js
import React from 'react';
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const CalendarHeader = ({ currentDate, prevWeek, nextWeek }) => {
  return (
    <div className='menu__rondas'>
      <button onClick={prevWeek}><FaCircleArrowLeft className='flecha__semana'/></button>
      <span className='fecha__actual'>{currentDate.toDateString()}</span>
      <button onClick={nextWeek}><FaCircleArrowRight className='flecha__semana'/></button>
    </div>
  );
};

export default CalendarHeader;
