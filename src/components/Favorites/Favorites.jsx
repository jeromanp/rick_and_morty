import React from "react";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCard, orderCard, resetCard } from "../../redux/actions";

export default function Favorites(props) {
  const navigate = useNavigate();
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  // const characters = props.characters.filter((el) => {
  //   for (let i = 0; i < myFavorites.length; i++) {
  //     if (myFavorites[i].id === el.id) {
  //       return el;
  //     }
  //   }
  // });

  function backtoHome() {
    return navigate("/home");
  }

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Filter") {
      return dispatch(filterCard(value));
    }
    if (name === "Order") {
      dispatch(orderCard(value));
    }
    // if(name === "All"){
    //   return null
    // }
  }

  return (
    <>
      <div>
        <select name="Order" defaultValue={"Default"} onChange={handleSelect}>
          <option value="Default" disabled>Select Order</option>
          {/* <option value="All">All</option> */}

          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="Filter" defaultValue={"Default"} onChange={handleSelect}>
          <option value="Default" disabled>Select Filter</option>
          {/* <option value="All">All</option> */}
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderles">Genderles</option>
          <option value="Unknown">Unknown</option>
        </select>

        <div>
          <button onClick={()=>dispatch(resetCard())}>Reset</button>
        </div>

      </div>

      <div>
        <button className={style.buttonBack} onClick={backtoHome}>
          Volver
        </button>
      </div>

      <div className={style.cards}>
        <h1 className={style.h1}>Favorites</h1>
        {myFavorites?.map((personaje) => (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={() => props.onClose(personaje.id)}
          />
        ))}
      </div>
    </>
  );
}

