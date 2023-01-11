import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "jeroman@gmail.com";
  const password = "1password";

  const login = (userData) => {
    if (password === userData.password && username === userData.username) {
      setAccess(true);
      navigate("/home");
      alert("Has accedido a la App");
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

  if (location.pathname === "/about") {
    return (
      <>
        <About />
      </>
    );
  }

  return (
    <div className={styles.App}>
      <div>
        {location.pathname === "/" ? (
          <>
            <h1 className={styles.h1}>Bienvenido a la App de Rick And Morty</h1>
          </>
        ) : (
          <Nav onSearch={onSearch} logout={logout} />
        )}
      </div>

      <Routes>
        <Route path="/" element=<Form login={login} /> />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element=<About /> />
        <Route path="/detail/:detailId" element=<Detail /> />
        <Route path="/favorites" element=<Favorites characters={characters} onClose={onClose}/> />
      </Routes>
    </div>
  );
}
