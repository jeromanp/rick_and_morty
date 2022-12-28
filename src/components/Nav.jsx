import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";

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
      {/* <div>
        <button className={styles.homeFiltrar}>Filter</button>
      </div> */}
      <div>        
        <SearchBar onSearch={props.onSearch} />        
        {/* 1. componente SearchBar importado desde ./SearchBar */}
        {/* 5. se agregar onSearch del App.js */}
      </div>
      <div>
        <Link to= "/about">
          <button className={styles.buttonAbout}>About</button>        
        </Link>
      </div>
    </div>
  );
}
