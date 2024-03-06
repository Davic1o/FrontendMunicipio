// Calendar.js
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/Modal/Modal';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import './ronda.css';

const EscogerRonda = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  const handleOpenModal = (date) => {
    setModalOpen(true);
    setDayOfWeek(date.toLocaleDateString('es-ES', { weekday: 'long' }));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const generateWeekDates = useCallback(() => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }

    setWeekDates(dates);
  }, [currentDate]);

  useEffect(() => {
    generateWeekDates();
  }, [currentDate, generateWeekDates]);

  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div className='contenedor__calendario'>
      <h1 className='titulo__rondas'>Rondas Semanales</h1>
      <CalendarHeader currentDate={currentDate} prevWeek={prevWeek} nextWeek={nextWeek} />
      <CalendarBody weekDates={weekDates} handleOpenModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} diasemana={dayOfWeek} fecha={currentDate}/>
    </div>
  );
};

export default EscogerRonda;