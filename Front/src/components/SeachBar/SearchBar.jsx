import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   // 8. estado interno de characters
   const [characters, setCharacters] = useState("");
   //8.funcion que indica un cambio en el input con el evento
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
              
         // 8. listener onChange para que ejecute handleInputChange cuando haya un cambio,  el value seran los characters
         onChange={(event) => handleInputChange(event)}
         value={characters}
         
       />
       {/*6. funcion onSearch de App.js */}
       <button
         className={styles.buscarCard}
         onClick={() => {
           props.onSearch(characters);
           handleClearInput();
         }}      
       >
         Agregar
       </button>
     </div>
   );
 }
