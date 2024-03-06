import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Administrador from '../pages/Administrador/Administrador';
import Usuario from '../pages/Usuario/Usuario';


function Rutas() {
  return (
    
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registro" element={<Register/>} />
          <Route path="/Administrador" element={<Administrador/>} />
          <Route path="/Usuario" element={<Usuario/>} />
      </Routes>
  )
}

export default Rutas