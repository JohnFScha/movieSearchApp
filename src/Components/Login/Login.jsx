import React, { useRef} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = mailRef.current.value;
    const password = passwordRef.current.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && !emailPattern.test(email)) {
      MySwal.fire({
        icon: "error",
        title: <h2>You must input a correct email</h2>,
        showConfirmButton: true,
      });
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire({
        icon: "error",
        title: <h2>Invalid credentials</h2>,
        showConfirmButton: true,
      });
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        MySwal.fire({
          icon: "success",
          title: <h2>Login successful</h2>,
          showConfirmButton: true
        });
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate('/')
      });
  };

  let token = localStorage.getItem('token');

  return (
    <>
    {token && <Navigate to={'/listado'} />}
    
    <main className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h2 className="text-3xl">Login:</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-2/4 h-80 bg-yellow-200 p-5 
        rounded-md border-solid border-2 border-zinc-950 justify-around">
        <label htmlFor="email">
          Input your mail:
        </label>
        <input
          type="text"
          name="email"
          autoComplete="email"
          required
          className="bg-slate-600 text-white p-2"
          ref={mailRef}
        />
        <label htmlFor="password">Type in your password:</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          className="bg-slate-600 text-white p-2"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="rounded-md bg-red-800 my-3 w-20 mx-auto text-white p-2"
        >
          Log in
        </button>
      </form>
    </main>
    </>
  );
};

export default Login;
