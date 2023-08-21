import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { requestSession } from "../../store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = mailRef.current.value;
    const password = passwordRef.current.value;

    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire({
        icon: "error",
        title: <h2>Invalid credentials</h2>,
        showConfirmButton: true,
      });
      return;
    }

    dispatch(requestSession());

    MySwal.fire({
      title: "Login sucessful",
      icon: "success",
      showConfirmButton: true,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col bg-black p-5 rounded-3xl border-solid border-2 border-zinc-950 justify-around shadow-2xl"
    >
      <label htmlFor="email">Input your mail:</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        required
        className="bg-slate-600 text-white p-1"
        ref={mailRef}
      />
      <label htmlFor="password">Type in your password:</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
        className="bg-slate-600 text-white p-1"
        ref={passwordRef}
      />
      <button
        type="submit"
        className="rounded-md bg-green-600 mt-3 w-20 mx-auto text-white p-2"
      >
        Log in
      </button>
    </form>
  );
};

export default Form;
