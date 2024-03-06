import React from 'react'
import './inputPass.css'

function InputPass({Icono, Placeholder}) {
    const TipoInput = Placeholder;
  return (
    <>
    <div className="contenedor__inputPass">
        <div className="inf__inputPass">
            <div className="icono__inputPass">
                {Icono}
            </div>
            <div className="campo__inputPass">
            <input type="text" className='inputPass' placeholder={TipoInput} />
            </div>
        </div>
    </div>
    </>
  )
}

export default InputPass