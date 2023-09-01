import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "jeroman@email.com";
  const password = "1password";

  const login = (userData) => {
    if (password === userData.password && username === userData.username) {
      setAccess(true);
      navigate("/home");
      // alert("Has accedido a la App");
    } else {
      alert("username y/o password incorrectos");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
    alert("Has salido de tu cuenta");
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  async function onSearch(id) {
    try {
      const resultChar = await axios(
        `https://rick-and-morty-jeromanp.vercel.app/rickandmorty/character/${id}`
      );
      let char = resultChar.data;
      if (char.name) {
        //para no repetir personajes
        let existe = characters.find((event) => event.id === char.id);
        if (existe) {
          alert("Ese personaje ya existe");
        } else {
          setCharacters((oldChars) => [...oldChars, char]);
        }
        //termina funcion para no repetir personajes
      } else {
        window.alert("No hay personajes con ese ID!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onClose(id) {
    setCharacters((dato) => {
      return dato.filter((event) => event.id !== id);
    });
    alert(`Se elimino el ID ${id}`);
  }

  if (location.pathname === "/about") {
    return (
      <>
        <About />
      </>
    );
  }

  return (
    <div className={styles.App}>
      <span>
        {location.pathname === "/" ? (
          <>
            <h1 className={styles.h1}>Rick And Morty</h1>
            <h3 className={styles.h3}>by: José Eduardo Roman</h3>
          </>
        ) : (
          <Nav onSearch={onSearch} logout={logout} />
        )}
      </span>

      <Routes>
        <Route path="/" element=<Form login={login} /> />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element=<About /> />
        <Route path="/detail/:detailId" element=<Detail /> />
        <Route
          path="/favorites"
          element=<Favorites characters={characters} onClose={onClose} />
        />
      </Routes>
    </div>
  );
}
