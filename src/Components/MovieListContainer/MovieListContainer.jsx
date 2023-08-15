import React from "react";
import { Link } from "react-router-dom";

const MovieListContainer = ({ movies }) => {
  
  return (
    <>
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
    </>
  );
};

export default MovieListContainer;
