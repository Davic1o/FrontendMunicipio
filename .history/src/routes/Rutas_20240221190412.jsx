import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';


function Rutas() {
  return (
    
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registro" element={<Register/>} />
      </Routes>
  )
}

export default Rutas