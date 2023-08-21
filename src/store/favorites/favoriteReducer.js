import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "./favoriteTypes";
import { loadFromLocalStorage } from "../../utils/loadFavs";

const initialState  = {
  favs: loadFromLocalStorage()
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVS:
      const updatedFavsAdd = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavsAdd));
      return { ...state, favs: updatedFavsAdd };

    case REMOVE_FROM_FAVS:
      const updatedFavsRemove = state.favs.filter(movie => movie.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(updatedFavsRemove));
      return { ...state, favs: updatedFavsRemove };

    default:
      return state;
  }
};

export default favoritesReducer;