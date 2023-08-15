import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Buscador = () => {
  const keywordRef = useRef();
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);
  
  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = keywordRef.current.value.trim();
    if (keyword.length === 0) {
      mySwal.fire({
        icon: "error",
        title: <h2>You must input a keyword</h2>,
        showConfirmButton: true
      })
    } else if (keyword.length <= 3) {
      mySwal.fire({
        icon: "error",
        title: <h2>Keyword must be at least 4 characters long</h2>,
        showConfirmButton: true
      })
    }
    keywordRef.current.value = ''
    navigate(`/busqueda?keyword=${keyword}`)
  }

  return (
    <form action="" className='flex items-center gap-3' onSubmit={submitHandler}>
      <label htmlFor="search">
        <input type="text" placeholder='Search...' name='search' ref={keywordRef} className='p-2 rounded-md text-black'/>
      </label>
      <button type="submit" className='rounded-md p-2 bg-white text-black'>Search</button>
    </form>
  )
}

export default Buscador