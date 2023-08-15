import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZmNDg0NzNkMjRlZTBjOWM4YTg4NmNiNmFkODQ2ZCIsInN1YiI6IjY0ZDE1MmQ3ZDlmNGE2MDNiNTRhOTU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4_T2lHWSmjDOegqYp1IZqdY0r6ehkr7E9h1Y-nxtzM",
  },
};

const Listado = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");
  

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=20", options);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };
    setTimeout(() => {
      fetchMovies();
    }, 3000);
  }, [setMovies]);

  return (
    <>
      {!token && <Navigate to={"/"} />}

      {loading === true ? (
        <section className="min-h-screen flex justify-center-center items-center">
          <div className="spinner-container m-auto">
            <Oval
              height={100}
              width={100}
              color="#111"
              wrapperStyle={{}}
              wrapperClass="spinner-container"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#000"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        </section>
      ) : (
        <main className="min-h-screen">
          <h2 className="text-5xl text-center m-5">Popular:</h2>
          <section className="grid grid-cols-4 gap-10 m-5">
            {movies.map((movie) => {
              return (
                <article
                  key={movie.id}
                  className="grid grid-flow-row-dense justify-between border border-solid border-gray-500 rounded-md shadow-2xl shadow-slate-800 bg-cyan-900 text-white"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className="rounded-md"
                  />
                  <div className="flex flex-col gap-2 p-5">
                    <h2 className="text-xl mt-2">Title: {movie.title}</h2>
                    <p className="text-lg">
                      Popularity: {movie.popularity.toFixed(2)}
                    </p>
                  <Link
                    to={`/listado/${movie.id}`}
                    className="rounded-md p-2 bg-black text-white mt-auto text-center"
                  >
                    View Details
                  </Link>
                  </div>
                </article>
              );
            })}
          </section>
        </main>
      )}
    </>
  );
};

export default Listado;
