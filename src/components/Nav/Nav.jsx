import React from "react";
import SearchBar from "../SeachBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {
  const location = useLocation();

  return (
    <div className={styles.nav}>
      {location.pathname === "/" ? null : (
        <>
          <div>
            <h1 className={styles.h1}>Rick And Morty</h1>
          </div>

          <div>
            <Link to="/home">
              <button className={styles.homeFiltrar}>Home</button>
            </Link>
          </div>
        </>
      )}

      {location.pathname === "/favorites" ? null : (
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div>
      )}

      {location.pathname === "/favorites" ? null : (
        <div>
          <Link to="/favorites">
            <button
              className={styles.buttonFavorites}
              onClick={props.favorites}
            >
              Favorites
            </button>
          </Link>
        </div>
      )}

      {location.pathname === "/about" ? null : (
        <div>
          <Link to="/about">
            <button className={styles.buttonAbout}>About</button>
          </Link>
        </div>
      )}

      <div>
        <Link to="/">
          <button className={styles.buttonLogout} onClick={props.logout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}
