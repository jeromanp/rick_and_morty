import styles from "./App.module.css";
import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";

export default function App() {
  
  const [characters, setCharacters] = useState([]);
  
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

  
  function onClose(id) {
    setCharacters((dato) => {
      return dato.filter((event) => event.id !== id);
    });
    alert(`Se elimino el ID ${id}`);
  }

  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div>
        <h1 className={styles.h1}>Bienvenido a la App de Rick And Morty</h1>
        <hr />
        <h3 className={styles.h3}>Ingresa tu usuario y contraseña para acceder</h3>
        <Form />
      </div>
    );
  }

  // if(location.pathname === "/home"){
  //   return(
  //     <div>
  //       <Nav/>
  //       <Cards characters={characters} onClose={onClose}/>
        
  //     </div>
  //   )
  // }

  if(location.pathname === "/about"){
    return(
      <div>
        {/* <Nav/> */}
        <About/>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      <div>        
        <Nav onSearch={onSearch} />        
      </div>      
      <Routes>        
        <Route path="/" element=<Form/> />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element=<About/> />   
        <Route path="/detail/:detailId" element=<Detail/> />        

      </Routes>
    </div>
  );
}


