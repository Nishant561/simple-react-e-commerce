import React from 'react'
import {Link} from 'react-router-dom'
function Button({text ,color , border}) {
  return (
    <>
        <Link className={`${color? color : 'text-white'} px-2 py-3 border rounded ${border? border :'border-white'}`}>
                {text}
        </Link>
    
    </>
  )
}

export default Button
