import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

//se hizo destructuring de props => function Card (props){}
//props tiene las propiedades:name,species,gender,image y la funcion onClose
export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  function handleFavorite(id) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(id));
    }
  }

  useEffect(() => {
    myFavorites.forEach((id) => {
      if (id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.favButton} onClick={()=>handleFavorite(props.id)}>
          ❤️
        </button>
      ) : (
        <button className={styles.favButton} onClick={()=>handleFavorite(props.id)}>
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

// export function mapDispatchToProps(dispatch) {
//   return {
//     // addFavorite: (id) => {
//     //   dispatch(addFavorite(id));
//     // },
//     addFavorite: (personaje) => {
//       dispatch(addFavorite(personaje));
//     },
//     deleteFavorite: (id) => {
//       dispatch(deleteFavorite(id));
//     },
//   };
// }

// export function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
