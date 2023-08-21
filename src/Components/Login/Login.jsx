import React, { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect } from "react-redux";
import { requestSession } from "../../store";

const Login = ({ requestSession, auth }) => {
  const mailRef = useRef();
  const passwordRef = useRef();
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

    requestSession();

    MySwal.fire({
      title: "Login sucessful",
      icon: "success",
      showConfirmButton: true,
    });
  };

  return (
    <main className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h2 className="text-3xl">Login:</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-2/4 h-80 bg-yellow-200 p-5 
        rounded-md border-solid border-2 border-zinc-950 justify-around"
      >
        <label htmlFor="email">Input your mail:</label>
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
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSession: () => dispatch(requestSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
