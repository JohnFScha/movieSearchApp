import React from 'react'
import Logo from '../../assets/alkemy.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between bg-black text-white p-2'>
      <img src={Logo} alt="alkemy" className='w-10 h-auto'/>
      <nav>
        <ul className='flex justify-between items-center gap-10 min-h-full'>
          <li className='border border-slate-50 p-3 rounded-md hover:bg-slate-50 hover:text-black'><Link to={"/"}>Home</Link></li>
          <li className='border border-slate-50 p-3 rounded-md hover:bg-slate-50 hover:text-black'><Link to={"/listado"}>Listado</Link></li>
          <li className='border border-slate-50 p-3 rounded-md hover:bg-slate-50 hover:text-black'><Link to={"/contacto"}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header