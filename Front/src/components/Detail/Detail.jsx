import React from "react";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  console.log(detailId);

  const navigate = useNavigate();
  function backToHome() {
    return navigate("/home");
    // return history.push("/home")
  }

  useEffect(() => {
    //https://rickandmortyapi.com/api/character/${detailId}
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detail}>
      <div>
        <button className={styles.buttonBack} onClick={backToHome}>
          Volver
        </button>
      </div>
      
      <>
        <h1 className={styles.name}>{character.name}</h1>
      </>
      <li>
        <h3 className={styles.h3}>Status: {character.status}</h3>
        <h3 className={styles.h3}>Specie: {character.species}</h3>
        <h3 className={styles.h3}>Gender: {character.gender}</h3>
        <h3 className={styles.h3}>Origin: {character.origin?.name}</h3>
      </li>
      <img className={styles.img} src={character.image} alt={character.name} />
    </div>
  );
}
