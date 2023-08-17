import { combineReducers } from "redux";
import moviesReducer from "./movies/movieReducer";
import movieReducer from "./movie/movieReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer
})

export default rootReducer