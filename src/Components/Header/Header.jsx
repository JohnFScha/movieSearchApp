import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='bg-black text-white p-1 '>
      <nav>
        <ul className='flex justify-around align-middle'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/listado"}>Listado</Link></li>
          <li><Link to={"/contacto"}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header