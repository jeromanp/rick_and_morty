import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

//se hizo destructuring de props => function Card (props){}
//props tiene las propiedades:name,species,gender,image y la funcion onClose
export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  //character es el objeto con todas las propiedades del personaje
  function handleFavorite(character) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(character));
    }
  }

  useEffect(() => {
    myFavorites.forEach((character) => {
      if (character.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.favButton} onClick={()=>handleFavorite(props)}>
          ❤️
        </button>
      ) : (
        <button className={styles.favButton} onClick={()=>handleFavorite(props)}>
          🤍
        </button>
      )}

      <button className={styles.cerrarCard} onClick={props.onClose}>
        X
      </button>

      <div>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
        <h3 className={styles.species}>Specie:{props.species}</h3>
        <h3 className={styles.gender}>Gender:{props.gender}</h3>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

