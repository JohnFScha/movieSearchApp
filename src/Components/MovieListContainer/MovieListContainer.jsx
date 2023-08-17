import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart as Outline, AiFillHeart as Fill } from "react-icons/ai";

const MovieListContainer = ({ movies }) => {
  const [fav, setFav] = useState(() => {
    const storedFavorites = localStorage.getItem("favs");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const isMovieInFavorites = (movieId) => {
    return fav.some((favMovie) => favMovie.id === movieId);
  };
  
  const handleAddToFavorites = (movie) => {
    if (isMovieInFavorites(movie.id)) {
      const updatedFavorites = fav.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFav(updatedFavorites);
      localStorage.setItem("favs", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...fav, movie];
      setFav(updatedFavorites);
      localStorage.setItem("favs", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <section className="grid grid-cols-4 gap-10 m-5">
      {movies.map((movie) => {
        return (
          <article
            key={movie.id}
            className="flex flex-col justify-between border border-solid border-gray-500 rounded-md shadow-2xl shadow-slate-800 bg-cyan-900 text-white"
          >
            <div className="flex flex-col">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-md relative top-0"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex justify-between items-center">
              <h2 className="text-xl">Title: {movie.title}</h2>
              {isMovieInFavorites(movie.id) ? (
                <button
                  className="ms-auto rounded-full text-4xl p-2 my-2"
                  onClick={() => handleAddToFavorites(movie)}
                >
                  <Fill />
                </button>
              ) : (
                <button
                  className="ms-auto rounded-full text-4xl p-2 my-2"
                  onClick={() => handleAddToFavorites(movie)}
                >
                  <Outline />
                </button>
              )}
              </div>
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
  );
};

export default MovieListContainer;
