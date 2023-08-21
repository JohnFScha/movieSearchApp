import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "./favoriteTypes";

export const addToFavs = (fav) => {
  return {
    type: ADD_TO_FAVS,
    payload: fav
  }
}

export const removeFromFavs = (fav) => {
  return {
    type: REMOVE_FROM_FAVS,
    payload: fav
  }
}