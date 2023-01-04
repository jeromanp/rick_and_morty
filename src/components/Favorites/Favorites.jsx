import React from "react";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Favorites(props) {
  // console.log(myFavorites)
  const navigate = useNavigate();
  const myFavorites = useSelector((state) => state.myFavorites);
  const characters = props.characters.filter((el) => {
    return myFavorites.includes(el.id);
  });

  function backtoHome() {
    return navigate("/home");
  }

  return (
    <>
      <div>
        <button className={style.buttonBack} onClick={backtoHome}>
          Volver
        </button>
      </div>

      <div className={style.cards}>
        <h1 className={style.h1}>Favorites</h1>
        {characters.map((personaje) => (
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

// export function mapStateToProps(state){
//     return {
//       myFavorites:state.myFavorites
//     }
//   }

// export default connect (mapStateToProps,null)(Favorites)
