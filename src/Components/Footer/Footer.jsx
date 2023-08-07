import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex justify-between align-middle mt-2 relative bottom-0'>
      <p className='m-0'>Alkemy Challenge TM</p>
      <div>
        <ul className='flex justify-around'>
          <li className='m-2'><a href="https://www.instagram.com/alkemy__/" target='_blank' rel='noopener noreferrer'>Instagram</a></li>
          <li className='m-2'><a href="https://www.facebook.com/AlkemyLATAM" target='_blank' rel='noopener noreferrer'>Facebook</a></li>
          <li className='m-2'><a href="https://twitter.com/alkemy__" target='_blank' rel='noopener noreferrer'>Twitter</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer