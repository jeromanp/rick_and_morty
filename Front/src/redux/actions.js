import { ADD_FAV, DELETE_FAV, FILTER, ORDER, RESET } from "./types";
import axios from "axios"

export function addFavorite(char) {
  return async function (dispatch) {
    try {
      const addCharFav = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        char
      );
      dispatch({
        type: ADD_FAV,
        payload: addCharFav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFavorite(id) {
  return async function (dispatch) {
    try {
      //eslint-disable-next-line
      const deleteFav = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`
      );
      dispatch({
        type: DELETE_FAV,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
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
