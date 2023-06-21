import React from 'react'

const Login = () => {

  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email !== "" && !emailPattern.test(email)) {
      console.log("debes escribir una direccion de correo electronico valida.")
      return 
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react') {
      console.log("credeciales invalidas")
      return
    }
  }

  return (
    <>
    <h2>Login:</h2>
    <form onSubmit={submitHandler} className='flex flex-col'>
      <label htmlFor="email" clas>Input your mail:</label>
      <input type="email" name="email" autoComplete='email' required/>
      <label htmlFor="password">Type in your password</label>
      <input type="password" name="password" autoComplete='current-password' required/>
      <button type="submit" className="text-red-600">Log in</button>
    </form>
    </>
  )
}

export default Login