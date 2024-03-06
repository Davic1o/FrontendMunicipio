import React from 'react'
import './inputTexto.css'

function InputTexto({Icono, Placeholder}) {
    const TipoInput = Placeholder;
  return (
    <>
    <div className="contenedor__inputTexto">
        <div className="inf__inputTexto">
            <div className="icono__inputTexto">
                {Icono}
            </div>
            <div className="campo__inputTexto">
            <input type="text" className='inputTexto' placeholder={TipoInput} />
            </div>
        </div>
    </div>
    </>
  )
}

export default InputTexto