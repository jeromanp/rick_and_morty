import { ADD_FAV, DELETE_FAV, FILTER, ORDER, RESET } from "./types";

const initialState = {
  myFavorites: [],
  myFavoritesCopy:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const newFavorites = [...state.myFavorites, action.payload];
      return {
        ...state,
        myFavorites: newFavorites,
        myFavoritesCopy:newFavorites,
      };
    case DELETE_FAV:
      const deleteFav = state.myFavorites.filter((character) => {
        return character.id !== action.payload;
      });
      return {
        ...state,
        myFavorites: deleteFav,
      };
    case FILTER:
      const filterCopy = [...state.myFavoritesCopy]
      const filter = filterCopy.filter((character)=> character.gender === action.payload)
      return{
        ...state,
        myFavorites:filter,
      }
    case ORDER:
      const orderCopy=[...state.myFavoritesCopy]
      const order = orderCopy.sort((a,b)=>{
        if(a.id > b.id){
          return "Ascendente" === action.payload ? 1 : -1
        }
        if((a.id < b.id)){
          return "Descendente" === action.payload ? 1 : -1
        }
        else{
          return 0
        }
      })
      return {
        ...state,
        myFavorites:order,
      }
    case RESET:
      return{
        ...state,
        myFavorites:[...state.myFavoritesCopy],
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
