import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_PAGES
} from "./searchTypes";
import { options } from "../../utils/requestOptions";

export const fetchSearchRequest = (page) => {
  return {
    type: FETCH_SEARCH_REQUEST,
    payload: page,
  };
};

export const fetchSearchSuccess = (search) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: search,
  };
};

export const fetchSearchFailure = (error) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const fetchSearchPages = (pages) => {
  return {
    type: FETCH_SEARCH_PAGES,
    payload: pages
  }
}

export const fetchSearch = (page, keyword) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest(page));
    fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`, options)
      .then((response) => response.json())
      .then((data) => {
        const pages = data.total_pages;
        dispatch(fetchSearchPages(pages));
        const movies = data.results;
        dispatch(fetchSearchSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = {error: 'error searching movies'};
        dispatch(fetchSearchFailure(errorMsg));
      });
  };
};