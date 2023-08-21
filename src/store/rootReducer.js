import { combineReducers } from "redux";
import moviesReducer from "./movies/movieReducer";
import movieReducer from "./movie/movieReducer";
import searchReducer from "./search/searchReducer";
import favoritesReducer from "./favorites/favoriteReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  auth: authReducer
})

export default rootReducer;