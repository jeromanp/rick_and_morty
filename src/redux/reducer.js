import { ADD_FAV, DELETE_FAV } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const newFavorites = [...state.myFavorites, action.payload];
      // newFavorites.push(action.payload);
      return {
        ...state,
        myFavorites: newFavorites,
      };
    case DELETE_FAV:
      const deleteFav = state.myFavorites.filter((id) => {
        return id !== action.payload;
      });
      return {
        ...state,
        myFavorites: deleteFav,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
