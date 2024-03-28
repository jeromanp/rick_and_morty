import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [characters, setCharacters] = useState("");
  //  console.log(characters);

  function handleInputChange(event) {
    setCharacters(event.target.value);
  }

  // Función para borrar el valor del input
  function handleClearInput() {
    setCharacters("");
  }

  return (
    <div>
      <input
        className={styles.inputCard}
        type="text"
        placeholder="ID del personaje"
        onChange={(event) => handleInputChange(event)}
        value={characters}
      />

      <button
        className={styles.buscarCard}
        onClick={() => {
          props.onSearch(characters);
          handleClearInput();
        }}
      >
        Add
      </button>
    </div>
  );
}
