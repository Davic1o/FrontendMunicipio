import React from 'react';
import './botonAceptar.css';

function BotonAceptar({ Icono, NombreBoton, onClick }) {
  const TextoBoton = NombreBoton;

  return (
    <>
      <div className="contenedorBotonAceptar" onClick={onClick}>
        <div className="inf__botonAceptar">
          <div className="icono__botonAceptar">{Icono}</div>
          <div className="texto__botonAceptar">{TextoBoton}</div>
        </div>
      </div>
    </>
  );
}

export default BotonAceptar;
