import React, { useEffect, useCallback } from "react";
import { Navigate } from "react-router-dom";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import { generateNumberArray } from "../../utils/createRange";
import { connect } from "react-redux";
import { fetchMovies, fetchMoviesRequest } from "../../store";
import PageSelect from "../PageSelect/PageSelect";

const Listado = ({ movieData, loading, page, fetchMovies, fetchMoviesRequest, auth }) => {
  const range = generateNumberArray(1, 15)
  console.log(auth)
  useEffect(() => {
    setTimeout(() => {
      fetchMovies(page);
    }, 1500);
  }, []);

  const handlePage = useCallback((num) => {
    fetchMoviesRequest(page);
    setTimeout(() => {
      fetchMovies(num);
    }, 1500);
  }, [page]);

  return (
    <main className="min-h-screen">
      {!auth && <Navigate to={"/"} />}

      { loading === true ? (
        <Loader />
      ) : (
        movieData.length !== 0 ? (
        <>
          <h2 className="text-4xl text-center italic my-5">Popular now</h2>
          <MovieListContainer movies={movieData} />
        </>
      ) : (
        <Loader />
      ))}
      <PageSelect range={range} page={page} handlePage={handlePage}/>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    movieData: state.movies.movies,
    loading: state.movies.loading,
    page: state.movies.page,
    auth: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (page) => dispatch(fetchMovies(page)),
    fetchMoviesRequest: (page) => dispatch(fetchMoviesRequest(page))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listado);
