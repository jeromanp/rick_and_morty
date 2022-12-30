import React from "react";
import SearchBar from "../SeachBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {


  return (
    <div className={styles.nav}>
      <div>
        <h1 className={styles.h1}>Rick And Morty</h1>
      </div>

      <div>
        <Link to="/home">
          <button className={styles.homeFiltrar}>Home</button>
        </Link>
      </div>

      <div>
        <SearchBar onSearch={props.onSearch} />        
      </div>

      <div>
        <Link to="/about">
          <button className={styles.buttonAbout}>About</button>
        </Link>
      </div>
    </div>
  );
}

// export default withRouter(Nav)
