import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./movieTypes";
import { options, baseUrl } from "../../utils/requestOptions";

export const fetchMovieRequest = (id) => {
  return {
    type: FETCH_MOVIE_REQUEST,
    payload: id
  };
};

export const fetchMovieSuccess = (movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieRequest(id));
    fetch(`${baseUrl}/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        const movie = data;
        console.log('Request data:',movie)
        dispatch(fetchMovieSuccess(movie));
      })
      .catch(error => {
        const errorMsg = error.status_message;
        dispatch(fetchMovieFailure(errorMsg));
      });
  };
};