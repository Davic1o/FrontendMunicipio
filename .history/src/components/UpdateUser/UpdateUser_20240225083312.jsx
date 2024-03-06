import React from 'react'
import InputTexto from '../inputs/InputTexto'
import InputPass from '../inputs/InputPass';
import { FaUser, FaKey } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

function UpdateUser() {
  return (
    <>
    <div className="contenedor__update">
      
    <InputTexto Icono={<FaUser />} Placeholder="User Name" />
    <InputPass Icono={<FaKey />} Placeholder="Password" />
            

    </div>
    
    </>
  )
}

export default UpdateUser