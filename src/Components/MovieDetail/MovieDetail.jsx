import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie, fetchMovieRequest } from "../../store";

const MovieDetail = () => {
  const { movie, loading } = useSelector(state => state.movie)
  const dispatch = useDispatch()
  const params = useParams();
  const movieId = params.movieId
  let token = sessionStorage.getItem("token");
  
  useEffect(() => {
    dispatch(fetchMovieRequest(movieId))
    setTimeout(() => {
      dispatch(fetchMovie(movieId));
    }, 1500);
  }, [movieId]);

  return (
    <main className="min-h-screen">
      {!token && <Navigate to={"/"} />}

      {loading === true ? (
        <Loader />
      ) : (
        movie && movie.id ? ( 
        <section className="grid grid-cols-2 place-items-center p-8 m-16 max-w-fit border border-slate-800 rounded-lg shadow-2xl shadow-slate-800 bg-cyan-900 text-white">
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md"
            />
          </figure>
          <div className="flex flex-col gap-5 text-xl">
            <h2 className="text-5xl italic">{movie.title}</h2>
            <small>
              Original: {movie.original_title} - {movie.original_language}
            </small>
            <div className="grid grid-cols-3 m-5">
              <div>
                <p>Genres: </p>
                <ul className="list-disc">
                  {movie && movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-md">Popularity:</p> 
                <p>{movie.popularity.toFixed(2)}</p>
                <ul className="list-disc">
                  <li>Average: {movie.vote_average.toFixed(2)}</li>
                  <li>Votes: {movie.vote_count}</li>
                </ul>
              </div>
              <div>
                <p>Production companies:</p>
                <ul className="list-disc">
                  {movie && movie.production_companies.map((prod) => {
                    return (
                      <li key={prod.id}>{prod.name}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <h2 className="text-lg">Overview:</h2>
            <p>{movie.overview}</p>
            {movie.homepage.length === 0 ? null : (
              <p className="mt-auto">
                Homepage:{" "}
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Follow this link</strong>
                </a>
              </p>
            )}
          </div>
        </section>) : (
          <Loader />
        )
      )}
    </main>
  );
};

export default MovieDetail;
