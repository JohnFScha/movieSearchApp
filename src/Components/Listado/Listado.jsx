import React, { useEffect } from "react";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import { generateNumberArray } from "../../utils/createRange";
import { connect } from "react-redux";
import { fetchMovies, fetchMoviesRequest } from "../../store";
import PageSelect from "../PageSelect/PageSelect";

const Listado = ({
  movieData,
  loading,
  page,
  fetchMovies,
  fetchMoviesRequest,
}) => {
  const range = generateNumberArray(1, 15);

  useEffect(() => {
    setTimeout(() => {
      fetchMovies(page);
    }, 1500);
  }, [page]);

  const handlePage = (num) => {
    fetchMoviesRequest(num);
  };

  return (
    <main className="min-h-screen">
      {loading === true ? (
        <Loader />
      ) : movieData.length !== 0 ? (
        <>
          <h2 className="text-4xl text-center italic my-5">Popular now</h2>
          <MovieListContainer movies={movieData} />
        </>
      ) : (
        <Loader />
      )}
      <PageSelect range={range} page={page} handlePage={handlePage} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    movieData: state.movies.movies,
    loading: state.movies.loading,
    page: state.movies.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (page) => dispatch(fetchMovies(page)),
    fetchMoviesRequest: (page) => dispatch(fetchMoviesRequest(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listado);
