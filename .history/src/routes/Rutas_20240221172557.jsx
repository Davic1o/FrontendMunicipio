import React from 'react'
import { Routes, Route } from 'react-router-dom';


function Rutas() {
  return (
    
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Registro" element={<Register />} />
    <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />
    <Route path="/Administrador" element={<Admin />}/>
    <Route path="/Coordinador"  element={<Coord />} />
    <Route path="/Usuario" element={<User />} />

  </Routes>
  )
}

export default Rutas