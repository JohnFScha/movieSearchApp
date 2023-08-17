import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "./movieTypes";

const initialState = {
  movie: {},
  loading: false,
  error: "",
  id: 0
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.payload
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
