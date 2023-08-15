import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import { generateNumberArray } from "../../utils/createRange";

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
  const [page, setPage] = useState(1)
  let token = sessionStorage.getItem("token");
  const range = generateNumberArray(1, 10)
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
         `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };
    setTimeout(() => {
      fetchMovies();
    }, 1500);
  }, [page]);

  const handlePage = (num) =>{
    setPage(num)
    setLoading(true)
  }

  return (
    <>
      {!token && <Navigate to={"/"} />}

      {loading === true ? (
        <Loader loading={loading}/>
      ) : (
        <main className="min-h-screen">
          <h2 className="text-4xl text-center italic my-5">Popular now</h2>
          <MovieListContainer movies={movies} />
        </main>
      )}
      <div className="flex justify-between w-2/3 mx-auto my-10">
        {
          range.map((num, idx) => {
            return <button key={idx} onClick={() => handlePage(num)} className={page === num ? "p-4 rounded-lg bg-slate-300 text-black" : "p-4 rounded-lg bg-black text-white"}>{num}</button>
          })
        }
      </div>
    </>
  );
};

export default Listado;
