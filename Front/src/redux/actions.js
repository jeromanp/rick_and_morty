import { ADD_FAV, DELETE_FAV, FILTER, ORDER, RESET } from "./types";

export function addFavorite(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function deleteFavorite(id) {
  return {
    type: DELETE_FAV,
    payload: id,
  };
}

export function filterCard(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCard(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function resetCard() {
  return {
    type: RESET,
  };
}