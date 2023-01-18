import { ADD_FAV, DELETE_FAV, FILTER, ORDER, RESET } from "./types";
import axios from "axios"

export function addFavorite(char) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/rickandmorty/fav`, char)
      .then((value) => value.json())
      .then((dis) => {
        dispatch({
          type: ADD_FAV,
          payload: dis,
        });
      });
  };
}

export function deleteFavorite(id) {
  return function (dispatch) {
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((value) => value.data)
      .then((dis) => {
        dispatch({
          type: DELETE_FAV,
          payload: id,
        });
      });
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
