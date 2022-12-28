import styles from "./App.module.css";
import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";

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
        {/* 2. renderiza Nav que incluye el SearchBar */}
        <Nav onSearch={onSearch} />
        <hr />
      </div>

      <Routes>
        <Route path="/" element=<Login/> />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element=<About/> />   
        <Route path="/detail/:detailId" element=<Detail/> />        

      </Routes>
    </div>
  );
}

export default App;
