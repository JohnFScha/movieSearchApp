import React from 'react'
import { AiOutlineInstagram as IG, AiOutlineFacebook as FB, AiOutlineTwitter as TW } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex justify-between items-stretch p-2 relative bottom-0'>
      <div className='flex items-center'>
        <p>Alkemy Challenge TM</p>
      </div>
      <div>
        <ul className='flex justify-around gap-3'>
          <li className='text-4xl'><a href="https://www.instagram.com/alkemy__/" target='_blank' rel='noopener noreferrer'><IG /></a></li>
          <li className='text-4xl'><a href="https://www.facebook.com/AlkemyLATAM" target='_blank' rel='noopener noreferrer'><FB /></a></li>
          <li className='text-4xl'><a href="https://twitter.com/alkemy__" target='_blank' rel='noopener noreferrer'><TW /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer