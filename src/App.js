import styles from "./App.module.css";
import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  //3. se crea es estado characters
  const [characters, setCharacters] = useState([]);

  //9. copiar y pegar el fetch en onSearch
  //9. adicional, se modifica la promesa para que no agregue IDs repetidos
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          //para no repetir personajes
          let existe = characters.find((event) => event.id === data.id);
          if (existe) {
            alert("Ese personaje ya existe");            
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
          //termina funcion para no repetir personajes
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });



  }

  //10. funcion para cerrar las cards y mandar un alert de que ID se elimino
  function onClose(id) {
    setCharacters((dato) => {
      return dato.filter((event) => event.id !== id);
    });
    alert(`Se elimino el ID ${id}`);
  }

  return (
    <div className={styles.App}>
      <div>
        <h1 className={styles.h1}>Rick And Morty</h1>
      </div>     
      <hr />
      <div>
        {/* 2. renderiza Nav que incluye el SearchBar */}
        <Nav onSearch={onSearch} />
        <hr />
        <Cards characters={characters} onClose={onClose} />        
      </div>
    </div>
  );
}

export default App;
