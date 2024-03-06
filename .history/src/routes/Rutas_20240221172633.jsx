import React from 'react'
import { Routes, Route } from 'react-router-dom';


function Rutas() {
  return (
    
      <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
  )
}

export default Rutas