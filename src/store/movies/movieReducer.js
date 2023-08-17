import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./movieTypes";

const initialState = {
  movies: [],
  loading: false,
  error: "",
  page: 1,
  id: 0
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.payload,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
