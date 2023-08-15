import React from 'react'
import Logo from '../../assets/alkemy.png'
import { Link } from 'react-router-dom'
import Buscador from '../Buscador/Buscador'

const Header = () => {
  return (
    <header className='flex justify-between bg-black text-white p-3 shadow-lg shadow-gray-600'>
      <img src={Logo} alt="alkemy" className='w-10 h-auto'/>
      <Buscador />
    </header>
  )
}

export default Header