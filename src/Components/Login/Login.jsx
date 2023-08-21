import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";

const Login = () => {
  const { movies, page } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, []);

  return (
    <main className="min-h-full">
      <h2 className="text-5xl text-center italic my-5">Popular movies</h2>
      <section className="flex flex-row w-full overflow-x-scroll overflow-y-hidden p-5">
        <MovieListContainer movies={movies} />
      </section>
    </main>
  );
};

export default Login;
