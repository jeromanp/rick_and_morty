import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <div>
        <button className={styles.homeFiltrar}>Home</button>
      </div>
      <div>
        <button className={styles.homeFiltrar}>Filtrar</button>
      </div>
      <div>
        {/* 1. componente SearchBar importado desde ./SearchBar */}
        {/* 5. se agregar onSearch del App.js */}
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
