import React, { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const mailRef = useRef()
  const passwordRef = useRef()
  const MySwal = withReactContent(Swal)

  const submitHandler = (event) => {

    event.preventDefault();
    const email = mailRef.current.value;
    const password = passwordRef.current.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email !== "" && !emailPattern.test(email)) {
      MySwal.fire({
        icon: "error",
        title: <h1>You must input a correct email</h1>,
        showConfirmButton: true
      })
      return 
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react') {
      MySwal.fire({
        icon: "error",
        title: <h1>Invalid credentials</h1>,
        showConfirmButton: true
      })
      return
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        MySwal.fire({
          icon: "success",
          title: <h1>Login successful</h1>,
          showConfirmButton: true
        })
        const token = res.data.token
        localStorage.setItem("login", token)
        navigate("/listado")
      })
  }

  return (
    <>
      <h2 className='text-center'>Login:</h2>
      <form onSubmit={submitHandler} 
      className='flex flex-col 
          w-52 m-auto 
        bg-yellow-200 p-5 
          rounded-md border-solid border-2 border-zinc-950'>
        <label htmlFor="email" clas>Input your mail:</label>
        <input type="text" name="email" autoComplete='email' required  className='bg-slate-600 text-white' ref={mailRef}/>
        <label htmlFor="password">Type in your password</label>
        <input type="password" name="password" autoComplete='current-password' required className='bg-slate-600 text-white' ref={passwordRef}/>
        <button type="submit" className="rounded-full bg-red-800 my-3 w-20 mx-auto text-white">Log in</button>
      </form>
    </>
  )
}

export default Login