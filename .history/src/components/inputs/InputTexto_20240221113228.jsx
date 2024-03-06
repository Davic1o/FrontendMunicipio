import React from 'react'

function InputTexto({TextoInput}) {
    const TipoInput = TextoInput;
  return (
    <>
    <div className="contenedor__inputTexto">
        <div className="inf__inputTexto">
            <input type="text" className='inputTexto' placeholder={TipoInput} />
        </div>
    </div>
    </>
  )
}

export default InputTexto