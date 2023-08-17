import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_REQUEST,
} from "./movieTypes";
import { options, baseUrl } from "../../utils/requestOptions";

export const fetchMoviesRequest = (page) => {
  return {
    type: FETCH_MOVIES_REQUEST,
    payload: page,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMovies = (page) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest(page));
    fetch(
      `${baseUrl}/movie/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.errors;
        dispatch(fetchMoviesFailure(errorMsg));
      });
  };
};