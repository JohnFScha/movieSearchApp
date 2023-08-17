import { combineReducers } from "redux";
import moviesReducer from "./movies/movieReducer";
import movieReducer from "./movie/movieReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer
})

export default rootReducer