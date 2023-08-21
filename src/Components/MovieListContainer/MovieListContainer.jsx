import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart as Outline, AiFillHeart as Fill } from "react-icons/ai";
import { connect } from "react-redux";
import { addToFavs, removeFromFavs } from "../../store";

const MovieListContainer = ({ movies, fav, addToFavs, removeFromFavs }) => {
  const isMovieInFavorites = (movieId) => {
    return fav.some((favMovie) => favMovie.id === movieId);
  };
  
  const handleAddToFavorites = (movie) => {
    if (isMovieInFavorites(movie.id)) {
      removeFromFavs(movie)
    } else {
      addToFavs(movie);
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
                className="rounded-md"
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

const mapStateToProps = (state) => {
  return {
    fav: state.favorites.favs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavs: (movie) => dispatch(addToFavs(movie)),
    removeFromFavs: (movie) => dispatch(removeFromFavs(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);