import { ADD_FAV, DELETE_FAV } from "./types";

export function addFavorite(id) {
  return {
    type: ADD_FAV,
    payload: id,
  };
}

export function deleteFavorite(id) {
  return {
    type: DELETE_FAV,
    payload: id,
  };
}
